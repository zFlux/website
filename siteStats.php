<html>
 <head>
  <title>Site Stats</title>
 </head>

<body>
<h1>Today's Site Stats</h1>

<?php
  $mysqli = new mysqli("localhost", "loguser", "dan1217", "apachelogs");

  $todayStatQuery = "SELECT FROM_UNIXTIME(wal.time_stamp) time, wal.*
            FROM web_access_log wal
            WHERE FROM_UNIXTIME(wal.time_stamp) >= CURDATE();";

  $todayStatSummaryQuery = "select CURDATE() today, COUNT(DISTINCT wal.remote_host) distinct_requestors, SUM(wal.bytes_sent) / 1048576 mb_sent,
          SUM(CASE WHEN wal.request_uri = '/index.html' THEN 1 ELSE 0 END) page_requests,
          SUM(CASE WHEN wal.status = 404 THEN 1 ELSE 0 END) request_errors
          from apachelogs.web_access_log wal
          where FROM_UNIXTIME(wal.time_stamp) >= CURDATE();";

  $totalStatSummaryQuery = "select FROM_UNIXTIME(MIN(wal.time_stamp)) since, COUNT(DISTINCT wal.remote_host) distinct_requestors, SUM(wal.bytes_sent) / 1048576 mb_sent,
          SUM(CASE WHEN wal.request_uri = '/index.html' THEN 1 ELSE 0 END) page_requests,
          SUM(CASE WHEN wal.status = 404 THEN 1 ELSE 0 END) request_errors
          from apachelogs.web_access_log wal;";


  $todayStat = $mysqli->query($todayStatQuery);
  $todayStatSummary = $mysqli->query($todayStatSummaryQuery);
  $totalStatSummary = $mysqli->query($totalStatSummaryQuery);

  mysqli_close($mysqli);

  echo "<table border=1>";
  echo "<tr><td>Today</td><td>Distinct Requestors</td><td>MB's Served</td><td>Page Requests</td><td>Request Errors</td></tr>";
  while($row = mysqli_fetch_array($todayStatSummary)){
    echo "<tr><td>" . $row['today'] . "</td><td>" . $row['distinct_requestors'] . "</td><td>" . $row['mb_sent'] . "</td><td>" . $row['page_requests'] . "</td><td>" . $row['request_errors'] . "</td></tr>";
  }
  echo "</table>";


  echo "<table border=1>";
  echo "<tr><td>IP</td><td>Time</td><td>Agent</td><td>Request Method</td><td>Request URI</td><td>Status</td></tr>";
  while($row = mysqli_fetch_array($todayStat)){
    echo "<tr><td>" . $row['remote_host'] . "</td><td>" . $row['time'] . "</td><td>" . $row['agent'] . "</td><td>" . $row['request_method'] . "</td><td>" . $row['request_uri'] . "</td><td>" . $row['status'] . "</td></tr>";
  }
  echo "</table>";

  echo "<h1>Total Site Stats</h1>";

  echo "<table border=1>";
  echo "<tr><td>Since</td><td>Distinct Requestors</td><td>MB's Served</td><td>Page Requests</td><td>Request Errors</td></tr>";
  while($row = mysqli_fetch_array($totalStatSummary)){
    echo "<tr><td>" . $row['since'] . "</td><td>" . $row['distinct_requestors'] . "</td><td>" . $row['mb_sent'] . "</td><td>" . $row['page_requests'] . "</td><td>" . $row['request_errors'] . "</td></tr>";
  }
  echo "</table>";
?>

 </body>
</html>
