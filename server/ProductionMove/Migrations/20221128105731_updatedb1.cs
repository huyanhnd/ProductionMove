using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace ProductionMove.Migrations
{
    public partial class updatedb1 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Products_ProductLines_ProductLineId",
                table: "Products");

            migrationBuilder.DropIndex(
                name: "IX_Products_ProductLineId",
                table: "Products");

            migrationBuilder.DropPrimaryKey(
                name: "PK_ProductLines",
                table: "ProductLines");

            migrationBuilder.DropColumn(
                name: "Id",
                table: "ProductLines");

            migrationBuilder.AddColumn<string>(
                name: "ProductLineCode",
                table: "Products",
                type: "nvarchar(450)",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "Code",
                table: "ProductLines",
                type: "nvarchar(450)",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddPrimaryKey(
                name: "PK_ProductLines",
                table: "ProductLines",
                column: "Code");

            migrationBuilder.CreateIndex(
                name: "IX_Products_ProductLineCode",
                table: "Products",
                column: "ProductLineCode");

            migrationBuilder.AddForeignKey(
                name: "FK_Products_ProductLines_ProductLineCode",
                table: "Products",
                column: "ProductLineCode",
                principalTable: "ProductLines",
                principalColumn: "Code");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Products_ProductLines_ProductLineCode",
                table: "Products");

            migrationBuilder.DropIndex(
                name: "IX_Products_ProductLineCode",
                table: "Products");

            migrationBuilder.DropPrimaryKey(
                name: "PK_ProductLines",
                table: "ProductLines");

            migrationBuilder.DropColumn(
                name: "ProductLineCode",
                table: "Products");

            migrationBuilder.DropColumn(
                name: "Code",
                table: "ProductLines");

            migrationBuilder.AddColumn<int>(
                name: "Id",
                table: "ProductLines",
                type: "int",
                nullable: false,
                defaultValue: 0)
                .Annotation("SqlServer:Identity", "1, 1");

            migrationBuilder.AddPrimaryKey(
                name: "PK_ProductLines",
                table: "ProductLines",
                column: "Id");

            migrationBuilder.CreateIndex(
                name: "IX_Products_ProductLineId",
                table: "Products",
                column: "ProductLineId");

            migrationBuilder.AddForeignKey(
                name: "FK_Products_ProductLines_ProductLineId",
                table: "Products",
                column: "ProductLineId",
                principalTable: "ProductLines",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
