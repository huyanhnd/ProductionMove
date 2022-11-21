using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace ProductionMove.Migrations
{
    public partial class fix1 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Wards_Dictricts_DistrictId",
                table: "Wards");

            migrationBuilder.DropColumn(
                name: "DictrictId",
                table: "Wards");

            migrationBuilder.AlterColumn<int>(
                name: "DistrictId",
                table: "Wards",
                type: "int",
                nullable: false,
                defaultValue: 0,
                oldClrType: typeof(int),
                oldType: "int",
                oldNullable: true);

            migrationBuilder.AddForeignKey(
                name: "FK_Wards_Dictricts_DistrictId",
                table: "Wards",
                column: "DistrictId",
                principalTable: "Dictricts",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Wards_Dictricts_DistrictId",
                table: "Wards");

            migrationBuilder.AlterColumn<int>(
                name: "DistrictId",
                table: "Wards",
                type: "int",
                nullable: true,
                oldClrType: typeof(int),
                oldType: "int");

            migrationBuilder.AddColumn<int>(
                name: "DictrictId",
                table: "Wards",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddForeignKey(
                name: "FK_Wards_Dictricts_DistrictId",
                table: "Wards",
                column: "DistrictId",
                principalTable: "Dictricts",
                principalColumn: "Id");
        }
    }
}
