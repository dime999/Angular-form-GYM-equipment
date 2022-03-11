using Microsoft.EntityFrameworkCore.Migrations;

namespace MoviesAPI.Migrations
{
    public partial class name : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "Title",
                table: "Equipment",
                newName: "Name");

            migrationBuilder.RenameColumn(
                name: "Summary",
                table: "Equipment",
                newName: "Picture");

            migrationBuilder.RenameColumn(
                name: "Poster",
                table: "Equipment",
                newName: "Description");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "Picture",
                table: "Equipment",
                newName: "Summary");

            migrationBuilder.RenameColumn(
                name: "Name",
                table: "Equipment",
                newName: "Title");

            migrationBuilder.RenameColumn(
                name: "Description",
                table: "Equipment",
                newName: "Poster");
        }
    }
}
