# oauth-io-twitter-facebook-photo-post-howto
Sample code to post a Base64-encoded image to Facebook and Twitter using OAuth.io

I wrote this code for a project and decided to share it due to a serious lack of good, up-to-date samples on the internet.

This code jumps through some hoops as I was starting with a Base64-encoded image, you could bypass all the blob stuff and use canvas.toDataURL() instead, if that's what floats your boat.

Prerequisites -

Obviously you will need to sign up for an account at OAuth.io and add your Facebook and Twitter apps. Facebook app will need the publish_actions permission to post to users' walls, which means going through an approvals process. But you already knew that ;)
