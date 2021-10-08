2021-03-04

This page shows example usage of the VersionHistory web service API.

Platform
--------

List all platforms:

    GET https://versionhistory.googleapis.com/v1/chrome/platforms/

List all platform and channel combinations:

    GET https://versionhistory.googleapis.com/v1/chrome/platforms/all/channels

List all versions for all platform and channel combinations.

    GET https://versionhistory.googleapis.com/v1/chrome/platforms/all/channels/all/versions

Version
-------

List all versions for Windows in the `stable` channel:

    GET https://versionhistory.googleapis.com/v1/chrome/platforms/win/channels/stable/versions

List all versions for Windows in the `stable` channel in ascending order by version:

    GET https://versionhistory.googleapis.com/v1/chrome/platforms/win/channels/stable/versions?order_by=version%20asc

List all versions for Windows in `stable`, `beta`, and `dev` channels:

    GET https://versionhistory.googleapis.com/v1/chrome/platforms/win/channels/all/versions/?filter=channel<=dev

Release
-------

List all releases for Windows in the `stable` channel:

    GET https://versionhistory.googleapis.com/v1/chrome/platforms/win/channels/stable/versions/all/releases

List all releases for the version `85.0.4183.83`:

    GET https://versionhistory.googleapis.com/v1/chrome/platforms/all/channels/all/versions/85.0.4183.83/releases

List all releases for Windows that are currently being served:

    GET https://versionhistory.googleapis.com/v1/chrome/platforms/win/channels/all/versions/all/releases?filter=endtime=1970-01-01T00:00:00Z

List all releases for Windows in the `stable` channel that reached 100% rollout:

    GET https://versionhistory.googleapis.com/v1/chrome/platforms/win/channels/stable/versions/all/releases?filter=fraction=1
