---
title: Date and Time
---



## Datetime Notation
The valid ISO format is

```
YYYY-MM-DD HH:MM +hh:mm
```


### Other Date Notation
* dd.mm.yyyy, dd/mm/yyyy, mm/dd/yyyy, yyyy-mm-dd
* Regex: `\d{4}-\d{2}-\d{2}(?:[T ][012]\d:[012345]\d)?`



## Measuring and Counting Time

* **Universal Time (UT1):** UT1 is the principal form of Universal Time based on Earth's rotation. A day is determined by the mean solar time at 0° longitude. UT1 is the same everywhere on Earth.
* **International Atomic Time (TAI):** TAI is based on continuous counting of the SI second, which is determined as a weighted average of over 400 atomic clocks. The majority of the clocks involved are caesium clocks. It was initially set on 1958-01-01T00:00:00 of the UT2 time.
* **Coordinated Universal Time (UTC):** UTC is derived from TAI and UT1. It uses TAI for counting seconds but has added leap seconds to account for variations in the rotation of the Earth with respect to the solar time. The goal is to match UTC with UT1. As soon as the difference reaches 0.9 second, a leap second is added to UTC. As of 31 December 2016, when another leap second was added, TAI is exactly 37 seconds ahead of UTC.
* **Geocentric Coordinate Time (TCG):** is the proper time experienced by a distant clock comoving with the geocentre and is defined in the context of the general theory of relativity. It was defined that TCG instant 1977-01-01T00:00:32.184 exactly corresponds to TAI instant 1977-01-01T00:00:00.000.



**SI Definition (2019):** The second, symbol s, is the SI unit of time. It is defined by taking the fixed numerical value of the caesium frequency ΔνCs, the unperturbed ground-state hyperfine transition frequency of the caesium-133 atom, to be 9192631770 when expressed in the unit Hz, which is equal to s⁻¹.



<p>UTC: <span id="dt-utc">wait</span></p>
<p>TAI: <span id="dt-tai">wait</span></p>





## Time Zones


![Timezone Map](https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/World_Time_Zones_Map.png/990px-World_Time_Zones_Map.png)


### Important Time Zones

| Zone | Name  (T="Time")  | Offset    | Countries                      |
|:-----|:------------------|:----------|:-------------------------------|
| PST  | Pacific Standard  |   UTC -8  | USA (Los Angeles), Canada      |
| MST  | Mountain Standard |   UTC -7  | USA (Denver), Canada           |
| CST  | Central Standard  |   UTC -6  | USA (Chicago), Canada          |
| EST  | Eastern Standard  |   UTC -5  | USA (New York), Canada (Québec) |
| GMT  | Greenwich Mean    |   UTC +0  | England, Portugal              |
| CET  | Central Europe    |   UTC +1  | Germany, Italy                 |
| EET  | Eastern Europe    |   UTC +2  | Greece, Egypt                  |
| CST  | China Standard    |   UTC +8  | China                          |


**Daylight Saving Time:** Many countries have Daylight Saving Times (DST) – also called "Summer Time" – from spring to autum, which adds one hour to the UTC offset. Most countries near the equator do not use DST since the seasonal difference in sunlight is minimal.

**Date Border:** Since there are UTC-12 and UTC+14 time zones, a 2 day offset in date is possible.










## Datetime Libraries
Time is complicated, do not implement time classes or libraries on your own! You would need to account for

* different time zones (some are only 30 minutes ahead another)
* daylight saving times that start and stop on different days depending on timezone.
* calendar system transitions in the past
* leapdays or skipped days, introduced by various countries at various times
* leapseconds to counterbalance the deceleration of earth's rotation


| Type | Base Unit | Limit Max  |
|------|----------:|-----------:|
| U8   |       1 s |   4.25 min |
| U16  |       1 s |     18.2 h |
| U32  |       1 s |    136.2 y |
| U64  |       1 s |     18.2 h |
| U32  |      10ms |     18.2 h |


## References

* [ISO 8601:2019, “Date and time — Representations for information interchange”](https://www.iso.org/iso-8601-date-and-time-format.html)
* [IERS Bulletin C (leap second announcements)](https://www.iers.org/SharedDocs/News/EN/BulletinC.html)
* [Wikipedia: Leap second](https://en.wikipedia.org/wiki/Leap_second)


<script type="text/javascript">
<!--

function updateClock() {
  var dt = new Date();
  document.getElementById( "dt-utc" ).textContent = dt.toTimeString();
  dt.setSeconds( dt.getSeconds() + 38 );
  document.getElementById( "dt-tai" ).textContent = dt.toTimeString();
  setTimeout( updateClock, 100 );
}


document.addEventListener("DOMContentLoaded", function(){
  setTimeout( updateClock, 100 );

});

//-->
</script>
