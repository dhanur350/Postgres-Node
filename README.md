# Postgres-Node
## start the database server using:
pg_ctlcluster 13 main start

## Warning: the cluster will not be running as a systemd service. Consider using systemctl:
sudo systemctl start postgresql@13-main

## Switching to postgres command
sudo -u postgres psql

## To create a new database, in this example named mydb, you use the following command:
$ createdb stock

## If you do not want to use your database anymore you can remove it. For example, if you are the owner (creator) of the database mydb, you can destroy it using the following command:
$ dropdb mydb