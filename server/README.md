# PRODUCTIONMOVE API
Create the database:
- Step 1: dotnet tool install --global dotnet-ef
- Step 2: dotnet ef migrations add InitialCreate
- Step 3: dotnet ef database update
Use api: 
- Step 1: cd server/ProductionMove
- Step 2: dotnet run
- Step 3: https://localhost:7102/swagger/index.html

