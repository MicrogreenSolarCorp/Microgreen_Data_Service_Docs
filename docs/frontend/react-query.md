---
sidebar_position: 3
description: Why React Query?
---

# React Query

## Problem 1
Historical is being stored in a DynamoDB database and this data needs to be served to the frontend client.

Some numbers
- ~500mb per data point
- 1 data point logged every minute
- Max database TTL (how long the data will stay in the database) of 1 month
- 1 database RCU (Read Capacity Unit) is defined as 1 x 4kb read per second
Based on those numbers, a frontend client can potentially make a request for 43800 data points, which is about 21.9 mb.

If we take the lazy approach and just query the database every time the user uses the app, this will be uneconomical due to the following reasons
- RCU usage: estimated to be about 58.4 RCU for an entire read
- Network usage: It will cost at least 21.9 mb of data to for each data request, which could use up the user's data plan quickly if on mobile
- Speed: This much data will cause significant hiccups in all areas of the data retrieval pipeline, not limited to:
	- database querying
	- network sending
	- frontend loading

## Solution 1: Frontend Caching
We can cache the data on the frontend client. 

### Overview:
- On the initial load:
	- A full request will be performed
	- This data will then be cached.
- On subsequent loads:
	- We will retrieve the most recent data from the cache
	- Extract the timestamp
	- Call the backend with the timestamp to only retrieve data past that timestamp

### Types of Caches
There are 2 main types of browser caches, **localStorage** and **indexedDB**.
#### Local Session
- 5MB limit
- Key-value storage
- Synchronous operation (I.e. blocking)
#### IndexedDB
- Much larger storage capacity, sometimes up to GBs
- Can store JavaScript objects
- Asynchronous operation

For our usage, indexedDB seems to be the better choice, mainly due to the storage limit.

### Tanstack Query
To achieve this, we will be using Tanstack Query (Formerly known as React Query). Tanstack Query is a data fetching and caching library for React (works with Next.js). It provides an abstraction layer over the browser cache, allowing us to easily store and retrieve data from the cache.

### Tanstack Query Options
useQuery params:
- gcTime: The time in milliseconds that unused/inactive cache data remains in memory
- staleTime: The time in milliseconds after data is considered stale

PersistQueryClientProvider options
- maxAge: How long the data will stay in the cache

All the above options should ideally be set to 1000 * 60 * 60 * 24 * 30 (which is 30 days). However, that causes the error
```
(node:42282) TimeoutOverflowWarning: 2592000000 does not fit into a 32-bit signed integer.
Timeout duration was set to 1.
```
Thus it is only set to 20 days.


## Problem 1a)

React Query's queryFn gets called on:
- When 'useQuery' mounts (on initial page load)
- When window is refocused
- on network reconnection
- on every refetchInterval defined in the initialization of useQuery
```javascript
const { data, isLoading } = useQuery<EPData[], Error>({

queryKey: [queryKey],

queryFn: getEPData,

enabled: isAuthTokenReady,
});
```

When using useQuery, I must supply queryFn. queryFn must return a Promise that resolves to data or an error. React Query will take this data as the most up-to-date data => it will invalidate the entire cache and write the data returned from queryFn into the cache.

With up to 50k data points, a read will take around 1 minute, with a write being most probably longer. This is unacceptable. 


## Solution 1a) Structural Sharing
Query results by default are **structurally shared to detect if data has actually changed** and if not, **the data reference remains unchanged**


## External Resources
- [Tanstack (FKA React) Query documentation](https://tanstack.com/query/latest/docs/react/reference/useQuery)
- [Browser localStorage vs indexedDB](https://browsee.io/blog/unleashing-the-power-a-comparative-analysis-of-indexdb-local-storage-and-session-storage/)
