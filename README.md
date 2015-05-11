# SmoothieControl-Pebble
a Pebble watch app for controlling your [smoothieware](https://github.com/Smoothieware/Smoothieware) powered machine
Note: This was designed for use with 3D printers but should work for other types of machines smoothie supports

# Downloading

Download by going [here](https://apps.getpebble.com/applications/553dbc0dbdf9b3ae8c000025). You can also search for 'SmoothieControl' in the pebble app store.

<a href="https://apps.getpebble.com/applications/553dbc0dbdf9b3ae8c000025">
  <img src="http://pblweb.com/badge/553dbc0dbdf9b3ae8c000025/orange/medium/" alt="SmoothieControl is available on the Pebble appstore" />
</a>

# Function

* Jogging and homing XYZ axes
* Motors off
* Fans on/off

# Smoothie config

You must have networking enabled in your config.

```
network.enable                               true            # enable the ethernet network services
```

Also, see [this](http://smoothieware.org/network) Smoothieware wiki article.
