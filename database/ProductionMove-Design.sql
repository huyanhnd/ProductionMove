USE [master]
GO
/****** Object:  Database [ProductionMove]    Script Date: 12/25/2022 5:38:04 PM ******/
CREATE DATABASE [ProductionMove]
 CONTAINMENT = NONE
 ON  PRIMARY 
( NAME = N'ProductionMove', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL15.MSSQLSERVER\MSSQL\DATA\ProductionMove.mdf' , SIZE = 8192KB , MAXSIZE = UNLIMITED, FILEGROWTH = 65536KB )
 LOG ON 
( NAME = N'ProductionMove_log', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL15.MSSQLSERVER\MSSQL\DATA\ProductionMove_log.ldf' , SIZE = 73728KB , MAXSIZE = 2048GB , FILEGROWTH = 65536KB )
 WITH CATALOG_COLLATION = DATABASE_DEFAULT
GO
ALTER DATABASE [ProductionMove] SET COMPATIBILITY_LEVEL = 150
GO
IF (1 = FULLTEXTSERVICEPROPERTY('IsFullTextInstalled'))
begin
EXEC [ProductionMove].[dbo].[sp_fulltext_database] @action = 'enable'
end
GO
ALTER DATABASE [ProductionMove] SET ANSI_NULL_DEFAULT OFF 
GO
ALTER DATABASE [ProductionMove] SET ANSI_NULLS OFF 
GO
ALTER DATABASE [ProductionMove] SET ANSI_PADDING OFF 
GO
ALTER DATABASE [ProductionMove] SET ANSI_WARNINGS OFF 
GO
ALTER DATABASE [ProductionMove] SET ARITHABORT OFF 
GO
ALTER DATABASE [ProductionMove] SET AUTO_CLOSE OFF 
GO
ALTER DATABASE [ProductionMove] SET AUTO_SHRINK OFF 
GO
ALTER DATABASE [ProductionMove] SET AUTO_UPDATE_STATISTICS ON 
GO
ALTER DATABASE [ProductionMove] SET CURSOR_CLOSE_ON_COMMIT OFF 
GO
ALTER DATABASE [ProductionMove] SET CURSOR_DEFAULT  GLOBAL 
GO
ALTER DATABASE [ProductionMove] SET CONCAT_NULL_YIELDS_NULL OFF 
GO
ALTER DATABASE [ProductionMove] SET NUMERIC_ROUNDABORT OFF 
GO
ALTER DATABASE [ProductionMove] SET QUOTED_IDENTIFIER OFF 
GO
ALTER DATABASE [ProductionMove] SET RECURSIVE_TRIGGERS OFF 
GO
ALTER DATABASE [ProductionMove] SET  ENABLE_BROKER 
GO
ALTER DATABASE [ProductionMove] SET AUTO_UPDATE_STATISTICS_ASYNC OFF 
GO
ALTER DATABASE [ProductionMove] SET DATE_CORRELATION_OPTIMIZATION OFF 
GO
ALTER DATABASE [ProductionMove] SET TRUSTWORTHY OFF 
GO
ALTER DATABASE [ProductionMove] SET ALLOW_SNAPSHOT_ISOLATION OFF 
GO
ALTER DATABASE [ProductionMove] SET PARAMETERIZATION SIMPLE 
GO
ALTER DATABASE [ProductionMove] SET READ_COMMITTED_SNAPSHOT ON 
GO
ALTER DATABASE [ProductionMove] SET HONOR_BROKER_PRIORITY OFF 
GO
ALTER DATABASE [ProductionMove] SET RECOVERY FULL 
GO
ALTER DATABASE [ProductionMove] SET  MULTI_USER 
GO
ALTER DATABASE [ProductionMove] SET PAGE_VERIFY CHECKSUM  
GO
ALTER DATABASE [ProductionMove] SET DB_CHAINING OFF 
GO
ALTER DATABASE [ProductionMove] SET FILESTREAM( NON_TRANSACTED_ACCESS = OFF ) 
GO
ALTER DATABASE [ProductionMove] SET TARGET_RECOVERY_TIME = 60 SECONDS 
GO
ALTER DATABASE [ProductionMove] SET DELAYED_DURABILITY = DISABLED 
GO
ALTER DATABASE [ProductionMove] SET ACCELERATED_DATABASE_RECOVERY = OFF  
GO
EXEC sys.sp_db_vardecimal_storage_format N'ProductionMove', N'ON'
GO
ALTER DATABASE [ProductionMove] SET QUERY_STORE = OFF
GO
USE [ProductionMove]
GO
/****** Object:  UserDefinedFunction [dbo].[getProductLineCode]    Script Date: 12/25/2022 5:38:04 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE FUNCTION [dbo].[getProductLineCode](@Id int)
RETURNS nvarchar(max)
AS
BEGIN
    Declare @code nvarchar(max)
    Select @code = Code from ProductLines Where Id = @Id
    RETURN @code 
END
GO
/****** Object:  Table [dbo].[__EFMigrationsHistory]    Script Date: 12/25/2022 5:38:04 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[__EFMigrationsHistory](
	[MigrationId] [nvarchar](150) NOT NULL,
	[ProductVersion] [nvarchar](32) NOT NULL,
 CONSTRAINT [PK___EFMigrationsHistory] PRIMARY KEY CLUSTERED 
(
	[MigrationId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Accounts]    Script Date: 12/25/2022 5:38:04 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Accounts](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[FullName] [nvarchar](max) NULL,
	[Username] [nvarchar](max) NULL,
	[PasswordHash] [nvarchar](max) NULL,
	[Image] [nvarchar](max) NULL,
	[Role] [int] NOT NULL,
	[ResetToken] [nvarchar](max) NULL,
	[ResetTokenExpires] [datetime2](7) NULL,
	[PasswordReset] [datetime2](7) NULL,
	[Created] [datetime2](7) NOT NULL,
	[Updated] [datetime2](7) NULL,
 CONSTRAINT [PK_Accounts] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Districts]    Script Date: 12/25/2022 5:38:04 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Districts](
	[Code] [nvarchar](450) NOT NULL,
	[Name] [nvarchar](max) NOT NULL,
	[ProvinceCode] [nvarchar](450) NOT NULL,
 CONSTRAINT [PK_Districts] PRIMARY KEY CLUSTERED 
(
	[Code] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Factories]    Script Date: 12/25/2022 5:38:04 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Factories](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[Name] [nvarchar](max) NOT NULL,
	[Address] [nvarchar](max) NOT NULL,
	[WardCode] [nvarchar](450) NOT NULL,
 CONSTRAINT [PK_Factories] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Processes]    Script Date: 12/25/2022 5:38:04 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Processes](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[Name] [nvarchar](max) NULL,
	[RequiredDate] [datetime2](7) NOT NULL,
	[ApprovedDate] [datetime2](7) NOT NULL,
	[Status] [tinyint] NOT NULL,
 CONSTRAINT [PK_Processes] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[ProductLines]    Script Date: 12/25/2022 5:38:04 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[ProductLines](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[Code] [nvarchar](max) NOT NULL,
	[Name] [nvarchar](max) NOT NULL,
	[SeriesId] [int] NOT NULL,
	[ScreenSize] [real] NOT NULL,
	[Chip] [nvarchar](max) NOT NULL,
	[Camera] [nvarchar](max) NOT NULL,
	[Ram] [int] NOT NULL,
	[RefreshRate] [int] NOT NULL,
	[Battery] [nvarchar](max) NOT NULL,
	[Weight] [int] NOT NULL,
	[ListPrice] [bigint] NOT NULL,
	[Image] [nvarchar](max) NOT NULL,
	[ImageSub] [nvarchar](max) NULL,
 CONSTRAINT [PK_ProductLines] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Products]    Script Date: 12/25/2022 5:38:04 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Products](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[Code]  AS (([dbo].[getProductLineCode]([ProductLineId])+'-')+right('00000'+CONVERT([varchar](5),[Id]),(5))),
	[ProductLineId] [int] NOT NULL,
	[ManufactureDate] [datetime2](7) NOT NULL,
	[WarrantyPeriod] [nvarchar](max) NOT NULL,
	[WarrantyTime] [int] NOT NULL,
	[Color] [nvarchar](max) NOT NULL,
	[Capacity] [nvarchar](max) NOT NULL,
	[Status] [tinyint] NOT NULL,
	[Price] [nvarchar](max) NOT NULL,
	[FactoryId] [int] NOT NULL,
	[StoreId] [int] NOT NULL,
	[ServiceCenterId] [int] NOT NULL,
	[ProcessId] [int] NOT NULL,
 CONSTRAINT [PK_Products] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Provinces]    Script Date: 12/25/2022 5:38:04 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Provinces](
	[Code] [nvarchar](450) NOT NULL,
	[Name] [nvarchar](max) NOT NULL,
 CONSTRAINT [PK_Provinces] PRIMARY KEY CLUSTERED 
(
	[Code] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[RefreshToken]    Script Date: 12/25/2022 5:38:04 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[RefreshToken](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[AccountId] [int] NOT NULL,
	[Token] [nvarchar](max) NOT NULL,
	[Expires] [datetime2](7) NOT NULL,
	[Created] [datetime2](7) NOT NULL,
	[CreatedByIp] [nvarchar](max) NOT NULL,
	[Revoked] [datetime2](7) NULL,
	[RevokedByIp] [nvarchar](max) NULL,
	[ReplacedByToken] [nvarchar](max) NULL,
	[ReasonRevoked] [nvarchar](max) NULL,
 CONSTRAINT [PK_RefreshToken] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Series]    Script Date: 12/25/2022 5:38:04 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Series](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[Name] [nvarchar](max) NULL,
	[Image] [nvarchar](max) NULL,
	[ImageSub] [nvarchar](max) NULL,
	[Description] [nvarchar](max) NULL,
 CONSTRAINT [PK_Series] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[ServiceCenters]    Script Date: 12/25/2022 5:38:04 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[ServiceCenters](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[Name] [nvarchar](max) NULL,
	[Address] [nvarchar](max) NULL,
	[WardCode] [nvarchar](450) NOT NULL,
 CONSTRAINT [PK_ServiceCenters] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Stores]    Script Date: 12/25/2022 5:38:04 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Stores](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[Name] [nvarchar](max) NOT NULL,
	[Address] [nvarchar](max) NOT NULL,
	[WardCode] [nvarchar](450) NOT NULL,
 CONSTRAINT [PK_Stores] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Wards]    Script Date: 12/25/2022 5:38:04 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Wards](
	[Code] [nvarchar](450) NOT NULL,
	[Name] [nvarchar](max) NOT NULL,
	[DistrictCode] [nvarchar](450) NOT NULL,
 CONSTRAINT [PK_Wards] PRIMARY KEY CLUSTERED 
(
	[Code] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
SET ANSI_PADDING ON
GO
/****** Object:  Index [IX_Districts_ProvinceCode]    Script Date: 12/25/2022 5:38:04 PM ******/
CREATE NONCLUSTERED INDEX [IX_Districts_ProvinceCode] ON [dbo].[Districts]
(
	[ProvinceCode] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
GO
SET ANSI_PADDING ON
GO
/****** Object:  Index [IX_Factories_WardCode]    Script Date: 12/25/2022 5:38:04 PM ******/
CREATE NONCLUSTERED INDEX [IX_Factories_WardCode] ON [dbo].[Factories]
(
	[WardCode] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
GO
/****** Object:  Index [IX_ProductLines_SeriesId]    Script Date: 12/25/2022 5:38:04 PM ******/
CREATE NONCLUSTERED INDEX [IX_ProductLines_SeriesId] ON [dbo].[ProductLines]
(
	[SeriesId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
GO
/****** Object:  Index [IX_Products_FactoryId]    Script Date: 12/25/2022 5:38:04 PM ******/
CREATE NONCLUSTERED INDEX [IX_Products_FactoryId] ON [dbo].[Products]
(
	[FactoryId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
GO
/****** Object:  Index [IX_Products_ProcessId]    Script Date: 12/25/2022 5:38:04 PM ******/
CREATE NONCLUSTERED INDEX [IX_Products_ProcessId] ON [dbo].[Products]
(
	[ProcessId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
GO
/****** Object:  Index [IX_Products_ProductLineId]    Script Date: 12/25/2022 5:38:04 PM ******/
CREATE NONCLUSTERED INDEX [IX_Products_ProductLineId] ON [dbo].[Products]
(
	[ProductLineId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
GO
/****** Object:  Index [IX_Products_ServiceCenterId]    Script Date: 12/25/2022 5:38:04 PM ******/
CREATE NONCLUSTERED INDEX [IX_Products_ServiceCenterId] ON [dbo].[Products]
(
	[ServiceCenterId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
GO
/****** Object:  Index [IX_Products_StoreId]    Script Date: 12/25/2022 5:38:04 PM ******/
CREATE NONCLUSTERED INDEX [IX_Products_StoreId] ON [dbo].[Products]
(
	[StoreId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
GO
/****** Object:  Index [IX_RefreshToken_AccountId]    Script Date: 12/25/2022 5:38:04 PM ******/
CREATE NONCLUSTERED INDEX [IX_RefreshToken_AccountId] ON [dbo].[RefreshToken]
(
	[AccountId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
GO
SET ANSI_PADDING ON
GO
/****** Object:  Index [IX_ServiceCenters_WardCode]    Script Date: 12/25/2022 5:38:04 PM ******/
CREATE NONCLUSTERED INDEX [IX_ServiceCenters_WardCode] ON [dbo].[ServiceCenters]
(
	[WardCode] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
GO
SET ANSI_PADDING ON
GO
/****** Object:  Index [IX_Stores_WardCode]    Script Date: 12/25/2022 5:38:04 PM ******/
CREATE NONCLUSTERED INDEX [IX_Stores_WardCode] ON [dbo].[Stores]
(
	[WardCode] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
GO
SET ANSI_PADDING ON
GO
/****** Object:  Index [IX_Wards_DistrictCode]    Script Date: 12/25/2022 5:38:04 PM ******/
CREATE NONCLUSTERED INDEX [IX_Wards_DistrictCode] ON [dbo].[Wards]
(
	[DistrictCode] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
GO
ALTER TABLE [dbo].[Processes] ADD  DEFAULT (CONVERT([tinyint],(0))) FOR [Status]
GO
ALTER TABLE [dbo].[Products] ADD  DEFAULT (CONVERT([tinyint],(0))) FOR [Status]
GO
ALTER TABLE [dbo].[Districts]  WITH CHECK ADD  CONSTRAINT [FK_Districts_Provinces_ProvinceCode] FOREIGN KEY([ProvinceCode])
REFERENCES [dbo].[Provinces] ([Code])
ON DELETE CASCADE
GO
ALTER TABLE [dbo].[Districts] CHECK CONSTRAINT [FK_Districts_Provinces_ProvinceCode]
GO
ALTER TABLE [dbo].[Factories]  WITH CHECK ADD  CONSTRAINT [FK_Factories_Wards_WardCode] FOREIGN KEY([WardCode])
REFERENCES [dbo].[Wards] ([Code])
ON DELETE CASCADE
GO
ALTER TABLE [dbo].[Factories] CHECK CONSTRAINT [FK_Factories_Wards_WardCode]
GO
ALTER TABLE [dbo].[ProductLines]  WITH CHECK ADD  CONSTRAINT [FK_ProductLines_Series_SeriesId] FOREIGN KEY([SeriesId])
REFERENCES [dbo].[Series] ([Id])
ON DELETE CASCADE
GO
ALTER TABLE [dbo].[ProductLines] CHECK CONSTRAINT [FK_ProductLines_Series_SeriesId]
GO
ALTER TABLE [dbo].[Products]  WITH CHECK ADD  CONSTRAINT [FK_Products_Factories_FactoryId] FOREIGN KEY([FactoryId])
REFERENCES [dbo].[Factories] ([Id])
GO
ALTER TABLE [dbo].[Products] CHECK CONSTRAINT [FK_Products_Factories_FactoryId]
GO
ALTER TABLE [dbo].[Products]  WITH CHECK ADD  CONSTRAINT [FK_Products_Processes_ProcessId] FOREIGN KEY([ProcessId])
REFERENCES [dbo].[Processes] ([Id])
ON DELETE CASCADE
GO
ALTER TABLE [dbo].[Products] CHECK CONSTRAINT [FK_Products_Processes_ProcessId]
GO
ALTER TABLE [dbo].[Products]  WITH CHECK ADD  CONSTRAINT [FK_Products_ProductLines_ProductLineId] FOREIGN KEY([ProductLineId])
REFERENCES [dbo].[ProductLines] ([Id])
ON DELETE CASCADE
GO
ALTER TABLE [dbo].[Products] CHECK CONSTRAINT [FK_Products_ProductLines_ProductLineId]
GO
ALTER TABLE [dbo].[Products]  WITH CHECK ADD  CONSTRAINT [FK_Products_ServiceCenters_ServiceCenterId] FOREIGN KEY([ServiceCenterId])
REFERENCES [dbo].[ServiceCenters] ([Id])
GO
ALTER TABLE [dbo].[Products] CHECK CONSTRAINT [FK_Products_ServiceCenters_ServiceCenterId]
GO
ALTER TABLE [dbo].[Products]  WITH CHECK ADD  CONSTRAINT [FK_Products_Stores_StoreId] FOREIGN KEY([StoreId])
REFERENCES [dbo].[Stores] ([Id])
GO
ALTER TABLE [dbo].[Products] CHECK CONSTRAINT [FK_Products_Stores_StoreId]
GO
ALTER TABLE [dbo].[RefreshToken]  WITH CHECK ADD  CONSTRAINT [FK_RefreshToken_Accounts_AccountId] FOREIGN KEY([AccountId])
REFERENCES [dbo].[Accounts] ([Id])
ON DELETE CASCADE
GO
ALTER TABLE [dbo].[RefreshToken] CHECK CONSTRAINT [FK_RefreshToken_Accounts_AccountId]
GO
ALTER TABLE [dbo].[ServiceCenters]  WITH CHECK ADD  CONSTRAINT [FK_ServiceCenters_Wards_WardCode] FOREIGN KEY([WardCode])
REFERENCES [dbo].[Wards] ([Code])
ON DELETE CASCADE
GO
ALTER TABLE [dbo].[ServiceCenters] CHECK CONSTRAINT [FK_ServiceCenters_Wards_WardCode]
GO
ALTER TABLE [dbo].[Stores]  WITH CHECK ADD  CONSTRAINT [FK_Stores_Wards_WardCode] FOREIGN KEY([WardCode])
REFERENCES [dbo].[Wards] ([Code])
ON DELETE CASCADE
GO
ALTER TABLE [dbo].[Stores] CHECK CONSTRAINT [FK_Stores_Wards_WardCode]
GO
ALTER TABLE [dbo].[Wards]  WITH CHECK ADD  CONSTRAINT [FK_Wards_Districts_DistrictCode] FOREIGN KEY([DistrictCode])
REFERENCES [dbo].[Districts] ([Code])
ON DELETE CASCADE
GO
ALTER TABLE [dbo].[Wards] CHECK CONSTRAINT [FK_Wards_Districts_DistrictCode]
GO
USE [master]
GO
ALTER DATABASE [ProductionMove] SET  READ_WRITE 
GO
