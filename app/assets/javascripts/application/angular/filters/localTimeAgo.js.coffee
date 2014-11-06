# Filters passed time as local time ago
# via local_time gem https://github.com/basecamp/local_time
# @note is used in article template
# @param time [String] represents a date
# @example
#   time = "2014-10-29T21:43:02.793Z"
#   {{time | localTimeAgo}}
#   returns "on Oct 30"
@app.angularFilters.filter "localTimeAgo", ->
  (time) ->
    LocalTime.relativeTimeAgo(new Date(time)) if time
