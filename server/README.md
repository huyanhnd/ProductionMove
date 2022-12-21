# PRODUCTIONMOVE API
## Create the database:
1. **_Install EFCore_**

```sh
$ dotnet tool install --global dotnet-ef
```
2. **_Add Migration_**
```sh
$ dotnet ef migrations add InitialCreate
```

3. **_Update Database_**

```sh
$ dotnet ef database update
```

## Use api: 
1. **_Navigate to dotnet project_**

```sh
$ cd server/ProductionMove
```
2. **_Build and run project_**
```sh
$ dotnet run
```

3. **_Browser_**

```sh
https://localhost:7102/swagger/index.html
```

