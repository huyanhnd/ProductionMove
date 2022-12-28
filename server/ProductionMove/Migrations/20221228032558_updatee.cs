using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace ProductionMove.Migrations
{
    public partial class updatee : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<DateTime>(
                name: "ErrorDate",
                table: "Products",
                type: "datetime2",
                nullable: false,
                defaultValue: new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified));

            migrationBuilder.AddColumn<DateTime>(
                name: "SoldDate",
                table: "Products",
                type: "datetime2",
                nullable: false,
                defaultValue: new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified));

            migrationBuilder.AddColumn<DateTime>(
                name: "WarrantyDate",
                table: "Products",
                type: "datetime2",
                nullable: false,
                defaultValue: new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified));

            migrationBuilder.AddColumn<int>(
                name: "FactoryId",
                table: "Processes",
                type: "int",
                nullable: true);

            migrationBuilder.AddColumn<int>(
                name: "StoreId",
                table: "Processes",
                type: "int",
                nullable: true);

            migrationBuilder.AddColumn<byte>(
                name: "Type",
                table: "Processes",
                type: "tinyint",
                nullable: false,
                defaultValue: (byte)0);

            migrationBuilder.CreateIndex(
                name: "IX_Processes_FactoryId",
                table: "Processes",
                column: "FactoryId");

            migrationBuilder.CreateIndex(
                name: "IX_Processes_StoreId",
                table: "Processes",
                column: "StoreId");

            migrationBuilder.AddForeignKey(
                name: "FK_Processes_Factories_FactoryId",
                table: "Processes",
                column: "FactoryId",
                principalTable: "Factories",
                principalColumn: "Id");

            migrationBuilder.AddForeignKey(
                name: "FK_Processes_Stores_StoreId",
                table: "Processes",
                column: "StoreId",
                principalTable: "Stores",
                principalColumn: "Id");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Processes_Factories_FactoryId",
                table: "Processes");

            migrationBuilder.DropForeignKey(
                name: "FK_Processes_Stores_StoreId",
                table: "Processes");

            migrationBuilder.DropIndex(
                name: "IX_Processes_FactoryId",
                table: "Processes");

            migrationBuilder.DropIndex(
                name: "IX_Processes_StoreId",
                table: "Processes");

            migrationBuilder.DropColumn(
                name: "ErrorDate",
                table: "Products");

            migrationBuilder.DropColumn(
                name: "SoldDate",
                table: "Products");

            migrationBuilder.DropColumn(
                name: "WarrantyDate",
                table: "Products");

            migrationBuilder.DropColumn(
                name: "FactoryId",
                table: "Processes");

            migrationBuilder.DropColumn(
                name: "StoreId",
                table: "Processes");

            migrationBuilder.DropColumn(
                name: "Type",
                table: "Processes");
        }
    }
}
