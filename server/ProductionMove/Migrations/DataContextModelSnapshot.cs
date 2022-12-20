﻿// <auto-generated />
using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using ProductionMove.Data.Context;

#nullable disable

namespace ProductionMove.Migrations
{
    [DbContext(typeof(DataContext))]
    partial class DataContextModelSnapshot : ModelSnapshot
    {
        protected override void BuildModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "6.0.11")
                .HasAnnotation("Relational:MaxIdentifierLength", 128);

            SqlServerModelBuilderExtensions.UseIdentityColumns(modelBuilder, 1L, 1);

            modelBuilder.Entity("ProductionMove.Data.Product", b =>
                {
                    b.Property<string>("Code")
                        .HasColumnType("nvarchar(450)");

                    b.Property<int>("Capacity")
                        .HasColumnType("int");

                    b.Property<string>("Color")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<int>("FactoryId")
                        .HasColumnType("int");

                    b.Property<DateTime>("ManufactureDate")
                        .HasColumnType("datetime2");

                    b.Property<string>("ProductLineCode")
                        .IsRequired()
                        .HasColumnType("nvarchar(450)");

                    b.Property<int>("ProductLineId")
                        .HasColumnType("int");

                    b.Property<int>("ServiceCenterId")
                        .HasColumnType("int");

                    b.Property<int>("Status")
                        .HasColumnType("int");

                    b.Property<int>("StoreId")
                        .HasColumnType("int");

                    b.Property<string>("WarrantyPeriod")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("Code");

                    b.HasIndex("FactoryId");

                    b.HasIndex("ProductLineCode");

                    b.HasIndex("ServiceCenterId");

                    b.HasIndex("StoreId");

                    b.ToTable("Products");
                });

            modelBuilder.Entity("ProductionMove.Data.ProductLine", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("Id"), 1L, 1);

                    b.Property<string>("Battery")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Battery")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Camera")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Chip")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Image")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("ImageSub")
                        .HasColumnType("nvarchar(max)");

                    b.Property<long>("ListPrice")
                        .HasColumnType("bigint");

                    b.Property<string>("Name")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<int>("Ram")
                        .HasColumnType("int");

                    b.Property<int>("RefreshRate")
                        .HasColumnType("int");

                    b.Property<float>("ScreenSize")
                        .HasColumnType("real");

                    b.Property<int>("SeriesId")
                        .HasColumnType("int");

                    b.Property<int>("Weight")
                        .HasColumnType("int");

                    b.HasKey("Code");

                    b.HasIndex("SeriesId");

                    b.ToTable("ProductLines");
                });

            modelBuilder.Entity("ProductionMove.Data.Series", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("Id"), 1L, 1);

                    b.Property<string>("Description")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Image")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("ImageSub")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Name")
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("Id");

                    b.ToTable("Series");
                });

            modelBuilder.Entity("ProductionMove.Models.Account", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("Id"), 1L, 1);

                    b.Property<DateTime>("Created")
                        .HasColumnType("datetime2");

                    b.Property<string>("FullName")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Image")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("PasswordHash")
                        .HasColumnType("nvarchar(max)");

                    b.Property<DateTime?>("PasswordReset")
                        .HasColumnType("datetime2");

                    b.Property<string>("ResetToken")
                        .HasColumnType("nvarchar(max)");

                    b.Property<DateTime?>("ResetTokenExpires")
                        .HasColumnType("datetime2");

                    b.Property<int>("Role")
                        .HasColumnType("int");

                    b.Property<DateTime?>("Updated")
                        .HasColumnType("datetime2");

                    b.Property<string>("Username")
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("Id");

                    b.ToTable("Accounts");
                });

            modelBuilder.Entity("ProductionMove.Models.District", b =>
                {
                    b.Property<string>("Code")
                        .HasColumnType("nvarchar(450)");

                    b.Property<string>("Name")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("ProvinceCode")
                        .IsRequired()
                        .HasColumnType("nvarchar(450)");

                    b.HasKey("Code");

                    b.HasIndex("ProvinceCode");

                    b.ToTable("Districts");
                });

            modelBuilder.Entity("ProductionMove.Models.Factory", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("Id"), 1L, 1);

                    b.Property<string>("Address")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Name")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("WardCode")
                        .IsRequired()
                        .HasColumnType("nvarchar(450)");

                    b.HasKey("Id");

                    b.HasIndex("WardCode");

                    b.ToTable("Factories");
                });

            modelBuilder.Entity("ProductionMove.Models.Province", b =>
                {
                    b.Property<string>("Code")
                        .HasColumnType("nvarchar(450)");

                    b.Property<string>("Name")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("Code");

                    b.ToTable("Provinces");
                });

            modelBuilder.Entity("ProductionMove.Models.ServiceCenter", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("Id"), 1L, 1);

                    b.Property<string>("Address")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Name")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("WardCode")
                        .IsRequired()
                        .HasColumnType("nvarchar(450)");

                    b.HasKey("Id");

                    b.HasIndex("WardCode");

                    b.ToTable("ServiceCenters");
                });

            modelBuilder.Entity("ProductionMove.Models.Store", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("Id"), 1L, 1);

                    b.Property<string>("Address")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Name")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("WardCode")
                        .IsRequired()
                        .HasColumnType("nvarchar(450)");

                    b.HasKey("Id");

                    b.HasIndex("WardCode");

                    b.ToTable("Stores");
                });

            modelBuilder.Entity("ProductionMove.Models.Ward", b =>
                {
                    b.Property<string>("Code")
                        .HasColumnType("nvarchar(450)");

                    b.Property<string>("DistrictCode")
                        .IsRequired()
                        .HasColumnType("nvarchar(450)");

                    b.Property<string>("Name")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("Code");

                    b.HasIndex("DistrictCode");

                    b.ToTable("Wards");
                });

            modelBuilder.Entity("ProductionMove.Models.Warehouse", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("Id"), 1L, 1);

                    b.Property<string>("Address")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Name")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<int>("StoreId")
                        .HasColumnType("int");

                    b.Property<int>("WardId")
                        .HasColumnType("int");

                    b.HasKey("Id");

                    b.HasIndex("StoreId");

                    b.ToTable("Warehouses");
                });

            modelBuilder.Entity("ProductionMove.Data.Product", b =>
                {
                    b.HasOne("ProductionMove.Models.Factory", "Factory")
                        .WithMany("Products")
                        .HasForeignKey("FactoryId")
                        .OnDelete(DeleteBehavior.NoAction)
                        .IsRequired();

                    b.HasOne("ProductionMove.Data.ProductLine", "ProductLine")
                        .WithMany("Products")
                        .HasForeignKey("ProductLineCode")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("ProductionMove.Models.ServiceCenter", "ServiceCenter")
                        .WithMany("Products")
                        .HasForeignKey("ServiceCenterId")
                        .OnDelete(DeleteBehavior.NoAction)
                        .IsRequired();

                    b.HasOne("ProductionMove.Models.Store", "Store")
                        .WithMany("Products")
                        .HasForeignKey("StoreId")
                        .OnDelete(DeleteBehavior.NoAction)
                        .IsRequired();

                    b.Navigation("Factory");

                    b.Navigation("ProductLine");

                    b.Navigation("ServiceCenter");

                    b.Navigation("Store");
                });

            modelBuilder.Entity("ProductionMove.Data.ProductLine", b =>
                {
                    b.HasOne("ProductionMove.Data.Series", "Series")
                        .WithMany("ProductLines")
                        .HasForeignKey("SeriesId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("Series");
                });

            modelBuilder.Entity("ProductionMove.Models.Account", b =>
                {
                    b.OwnsMany("ProductionMove.Models.RefreshToken", "RefreshTokens", b1 =>
                        {
                            b1.Property<int>("Id")
                                .ValueGeneratedOnAdd()
                                .HasColumnType("int");

                            SqlServerPropertyBuilderExtensions.UseIdentityColumn(b1.Property<int>("Id"), 1L, 1);

                            b1.Property<int>("AccountId")
                                .HasColumnType("int");

                            b1.Property<DateTime>("Created")
                                .HasColumnType("datetime2");

                            b1.Property<string>("CreatedByIp")
                                .IsRequired()
                                .HasColumnType("nvarchar(max)");

                            b1.Property<DateTime>("Expires")
                                .HasColumnType("datetime2");

                            b1.Property<string>("ReasonRevoked")
                                .HasColumnType("nvarchar(max)");

                            b1.Property<string>("ReplacedByToken")
                                .HasColumnType("nvarchar(max)");

                            b1.Property<DateTime?>("Revoked")
                                .HasColumnType("datetime2");

                            b1.Property<string>("RevokedByIp")
                                .HasColumnType("nvarchar(max)");

                            b1.Property<string>("Token")
                                .IsRequired()
                                .HasColumnType("nvarchar(max)");

                            b1.HasKey("Id");

                            b1.HasIndex("AccountId");

                            b1.ToTable("RefreshToken");

                            b1.WithOwner("Account")
                                .HasForeignKey("AccountId");

                            b1.Navigation("Account");
                        });

                    b.Navigation("RefreshTokens");
                });

            modelBuilder.Entity("ProductionMove.Models.District", b =>
                {
                    b.HasOne("ProductionMove.Models.Province", null)
                        .WithMany("Districts")
                        .HasForeignKey("ProvinceCode")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();
                });

            modelBuilder.Entity("ProductionMove.Models.Factory", b =>
                {
                    b.HasOne("ProductionMove.Models.Ward", null)
                        .WithMany("Factories")
                        .HasForeignKey("WardCode")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();
                });

            modelBuilder.Entity("ProductionMove.Models.ServiceCenter", b =>
                {
                    b.HasOne("ProductionMove.Models.Ward", null)
                        .WithMany("serviceCenters")
                        .HasForeignKey("WardCode")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();
                });

            modelBuilder.Entity("ProductionMove.Models.Store", b =>
                {
                    b.HasOne("ProductionMove.Models.Ward", null)
                        .WithMany("Stores")
                        .HasForeignKey("WardCode")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();
                });

            modelBuilder.Entity("ProductionMove.Models.Ward", b =>
                {
                    b.HasOne("ProductionMove.Models.District", null)
                        .WithMany("wards")
                        .HasForeignKey("DistrictCode")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();
                });

            modelBuilder.Entity("ProductionMove.Models.Warehouse", b =>
                {
                    b.HasOne("ProductionMove.Models.Store", null)
                        .WithMany("Warehouses")
                        .HasForeignKey("StoreId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();
                });

            modelBuilder.Entity("ProductionMove.Data.ProductLine", b =>
                {
                    b.Navigation("Products");
                });

            modelBuilder.Entity("ProductionMove.Data.Series", b =>
                {
                    b.Navigation("ProductLines");
                });

            modelBuilder.Entity("ProductionMove.Models.District", b =>
                {
                    b.Navigation("wards");
                });

            modelBuilder.Entity("ProductionMove.Models.Factory", b =>
                {
                    b.Navigation("Products");
                });

            modelBuilder.Entity("ProductionMove.Models.Province", b =>
                {
                    b.Navigation("Districts");
                });

            modelBuilder.Entity("ProductionMove.Models.ServiceCenter", b =>
                {
                    b.Navigation("Products");
                });

            modelBuilder.Entity("ProductionMove.Models.Store", b =>
                {
                    b.Navigation("Products");

                    b.Navigation("Warehouses");
                });

            modelBuilder.Entity("ProductionMove.Models.Ward", b =>
                {
                    b.Navigation("Factories");

                    b.Navigation("Stores");

                    b.Navigation("serviceCenters");
                });
#pragma warning restore 612, 618
        }
    }
}
