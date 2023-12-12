## UTF 8 SETUP CONFIRM
```sh
SHOW VARIABLES LIKE 'character_set_%';
```

## How to execute volume options. - Using Host folder
```sh
docker run -d -v /home/mhkim0240_2/DOCKER_LAB/ex05/mysql-volume:/var/lib/mysql -p 3307:3306 --name mysql-container mysql-image
```

## How to execute volume options. - Has a Name 
```sh
docker run -d -v mysql-volume:/var/lib/mysql -p 3307:3306 --name mysql-container mysql-image
```