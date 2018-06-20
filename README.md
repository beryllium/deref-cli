Deref CLI
=========

```deref-cli``` is a command line interface to the [https://deref.link/](https://deref.link/) URL tracing service ([available on github](https://github.com/beryllium/deref)).

By passing a URL to ```deref-cli```, you can get a preview of all the HTTP redirects the browser will jump through to reach its final destination. This is especially useful when investigating untrusted links from URL shortening services.

As [deref.link](https://deref.link/) was started as a way for me to learn **AngularJS**, it seems only fitting that ```deref-cli``` serve as a way to learn **NodeJS** and explore the available resources for building command-line applications in Node.

One cavaet of this inspired-by-learning origin is that ```deref-cli``` is using a remote API for the logic, when it would be simpler and faster to just use local logic. It's a bit of an odd direction, and I might improve it in the future.


Installation
------------

    > npm install --global deref-cli

Usage
-----

**Invocation:**

    > deref http://whateverthing.com

**Result:**

    Found 2 hops:
    1: http://whateverthing.com
    2: https://whateverthing.com/

About the Author
----------------

Kevin Boyd (aka Beryllium) is a web application developer by day, and by night, and sometimes while sleeping. His blog can be found at [https://whateverthing.com](https://whateverthing.com) and it even gets updated periodically.

License and Maintainership
--------------------------

deref-cli is open sourced under the MIT license.

I might not have time to add amazing new functionality to it, but you're welcome to submit pull requests. If you're so inclined, you're also entirely welcome to fork it and create your own vision for the tool.
