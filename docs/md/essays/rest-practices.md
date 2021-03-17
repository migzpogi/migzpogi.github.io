# Best Practices For REST API Design
REST APIs are one of the most common kinds of web services available today. Therefore, it’s very important to design 
REST APIs properly so that we won’t run into problems down the road. 

The most important takeaways for designing high-quality REST APIs is to have consistency by following web standards and 
conventions. Performance is also an important consideration. Paths of endpoints should be consistent, they should tell 
us what we’re getting or manipulating without the need to read extra documentation to understand what it’s doing. 

## Accept and respond with JSON
JSON is the standard for transferring data. To make sure that when our REST API app responds with JSON that clients 
interpret it as such, we should set Content-Type in the response header to `application/json` after the request is made. 
We should also make sure that our endpoints return JSON as a response.

## Use nouns instead of verbs in endpoint paths
We shouldn’t use verbs in our endpoint paths. This is because our HTTP request method already has the verb. Having verbs 
in our API endpoint paths isn’t useful and it makes it unnecessarily long since it doesn’t convey any new information.

## Name collections with plural nouns
We should name collections with plural nouns. It’s not often that we only want to get a single item, so we should be 
consistent with our naming, we should use plural nouns.

## Handle errors gracefully and return standard error codes
To eliminate confusion for API users when an error occurs, we should handle errors gracefully and return HTTP response 
codes that indicate what kind of error occurred. This gives maintainers of the API enough information to understand the 
problem that’s occurred.

## Allow filtering, sorting, and pagination
The databases behind a REST API can get very large. Therefore, we need ways to filter items. We also need ways to 
paginate data so that we only return a few results at a time.

## Maintain Good Security Practices
Most communication between client and server should be private since we often send and receive private information. 
Therefore, using SSL/TLS for security is a must.

## Cache data to improve performance
We can add caching to return data from the local memory cache instead of querying the database to get the data every 
time we want to retrieve some data that users request. The good thing about caching is that users can get data faster.

## Versioning our APIs
We should have different versions of API if we’re making any changes to them that may break clients. This way, we can 
gradually phase out old endpoints instead of forcing everyone to move to the new API at the same time. The v1 endpoint 
can stay active for people who don’t want to change, while the v2, with its shiny new features, can serve those who are 
ready to upgrade.

Versioning is usually done with /v1/, /v2/, etc. added at the start of the API path.

> :Buttons
> > :Button label=Source, url="https://stackoverflow.blog/2020/03/02/best-practices-for-rest-api-design/"

> :ToCPrevNext