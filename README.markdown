# Google Library APIs Mirror

This is a subset mirror of the [Google Libraries API](http://code.google.com/apis/libraries/devguide.html) CDN meant to be served
from your local development machine when internet access is lacking.

## Instructions

**Step 0:** Clone this repository

    git clone git://github.com/nicoster/googleapis-mirror-wget-node.git

**Step 1:** Run `build-local-cache.sh` to download a copy of all the libraries listed in
  `libraries.txt`. You need to have wget installed

**Step 2:** If you aren't on OS X, you can alternatively map ajax.googleapis.com to
127.0.0.1 using `/etc/hosts` or any equivalent. 

**Step 3:**  `npm install`

**Step 4:**  `sudo node server.js`. you may like to run it using forever `sudo forever server.js`

## Author

[Ryan McGeary](http://ryan.mcgeary.org) ([@rmm5t](http://twitter.com/rmm5t))
[superkuh](http://superkuh.com/ajaxgoogleapis.html)


## Other

[MIT License](http://www.opensource.org/licenses/mit-license.php)
