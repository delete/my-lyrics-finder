# my-lyrics-finder
A single page application powered by MEAN stack, to access the [Vagalume's API](http://api.vagalume.com.br/) 
and provides a way to search yours loved songs' lyrics and save them as favorites.

=======

# Running

* Clone the project:
```
git clone https://github.com/delete/my-lyrics-finder.git
```

* Enter the root directory:

```
cd my-lyrics-finder
```

## Server side and MongoDB

### Running in containers with Docker

```
$ cd server/
```

* Building:
```
$ docker-compose up
```

* Accessing:

```
http://YOU_LOCAL_IP:8080/
```


## Client side

> (It will be running in Docker container later)

### Using NodeJS

```
cd client/
```

* Installing depencencies

```
$ npm install && bower install
```

* Running

```
$ node server.js
```

* Acessing

```
http://YOU_LOCAL_IP:8081/
```

## Preview

![](http://i.imgur.com/aclWvUc.png)


