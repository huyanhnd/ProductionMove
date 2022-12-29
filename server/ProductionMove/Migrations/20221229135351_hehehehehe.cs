using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace ProductionMove.Migrations
{
    public partial class hehehehehe : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "ServiceCenterId",
                table: "Processes",
                type: "int",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_Processes_ServiceCenterId",
                table: "Processes",
                column: "ServiceCenterId");

            migrationBuilder.AddForeignKey(
                name: "FK_Processes_ServiceCenters_ServiceCenterId",
                table: "Processes",
                column: "ServiceCenterId",
                principalTable: "ServiceCenters",
                principalColumn: "Id");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Processes_ServiceCenters_ServiceCenterId",
                table: "Processes");

            migrationBuilder.DropIndex(
                name: "IX_Processes_ServiceCenterId",
                table: "Processes");

            migrationBuilder.DropColumn(
                name: "ServiceCenterId",
                table: "Processes");
        }
    }
}
