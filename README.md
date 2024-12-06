PROJECT 3

To spin up the project, simply install Docker Desktop and then run the following
commands:

```
git clone https://github.com/khoigf/Project3.git
cd Project3
docker compose up -d
```

or

```
git clone https://github.com/khoigf/Project3.git
cd Project3
docker compose watch
```

You'll see several container images get downloaded from Docker Hub and, after a
moment, the application will be up and running! No need to install or configure
anything on your machine!

Simply open to [http://localhost](http://localhost) to see the app up and running!

Any changes made to either the backend or frontend should be seen immediately
without needing to rebuild or restart the containers.

To help with the database, the development stack also includes phpMyAdmin, which
can be access at [http://db.localhost](http://db.localhost) (most browsers will
resolve `*.localhost` correctly, so no hosts file changes should be required).

### Tearing it down

When you're done, simply remove the containers by running the following command:

```
docker compose down
```
