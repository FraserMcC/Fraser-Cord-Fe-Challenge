Hi!

Really enjoyed implementing this was a really fun code test!

I'll use the readme to explain any challenges I encountered that may affect the quality of the result.

Also of note, I would obviously normally remove TODO's, but I left them in for assessors reference :)

***The implementation was finished in around 2.5 hours, forcing a time constraint to give an idea of my real skills***

The main one is my slight lack of experience with media queries and css animations. I have done base level of these, I think my skills are somewhat up to par
but I would definitely identity this as a personal weakness that I would look to improve in my next role. Saying this, I think I did a good implementation
with the app scaling fine for every device I tested using Chrome developer tools. There is perhaps some work to get the navbar to display a little nicer.

Obviously implementing the filter would've been beneficial but due to my time constraints I decided this was not the priority to implement.

Regarding rate limiting, I found the api calls I was making was only returning 20 results at a time so I didn't deem this as a priority at this time
but may be a good idea to add in an iteration of this project. Due to the rate limiting, I found it the best idea to return right as the user types,
Instead of caching a huge amount of movies and searching this way.

Personally I would change the colour scheme too as I think it presents somewhat of an accessibility issue (yellow backgrounds with white text eek) However I didn't simply because the filter images etc 
were already fitting in the scheme

There is also some funky behaviour based on the presence of an image on the remote server, This would ideally
have some form of error handling whereby the image is replaced with a static blank image.

Also some slight improvements to be made for the filter on mobile and mobile scaling in general, This is what
I was working on when I hit time.

The only bit of core functionality I missed was to implement the click off focus for the navbar, This would be implemented by handiling the mousedown effect and checking
whether the clicked element was in the navbar. This was missed due to forcing constraints on myself for time.

Also would include some better security around the API key, storing in a local environment file.

Overall I think it was a good attempt for a relatively robust solution to the problem. Thanks very much 
for your time and I hope you have a great week!

