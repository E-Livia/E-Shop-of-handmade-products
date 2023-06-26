using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

// Code scaffolded by EF Core assumes nullable reference types (NRTs) are not used or disabled.
// If you have enabled NRTs for your project, then un-comment the following line:
// #nullable disable

namespace EShop_backend.Models
{
    public partial class dbOnlineShopContext : DbContext
    {
        public dbOnlineShopContext()
        {
        }

        public dbOnlineShopContext(DbContextOptions<dbOnlineShopContext> options)
            : base(options)
        {
        }

        public virtual DbSet<Cart> Cart { get; set; }
        public virtual DbSet<CartProduct> CartProduct { get; set; }
        public virtual DbSet<Category> Category { get; set; }
        public virtual DbSet<Client> Client { get; set; }
        public virtual DbSet<ClientAddress> ClientAddress { get; set; }
        public virtual DbSet<ClientOrder> ClientOrder { get; set; }
        public virtual DbSet<Employee> Employee { get; set; }
        public virtual DbSet<EmployeeAddress> EmployeeAddress { get; set; }
        public virtual DbSet<EmployeeOrder> EmployeeOrder { get; set; }
        public virtual DbSet<Inventory> Inventory { get; set; }
        public virtual DbSet<Material> Material { get; set; }
        public virtual DbSet<Order> Order { get; set; }
        public virtual DbSet<Product> Product { get; set; }
        public virtual DbSet<ProductCategory> ProductCategory { get; set; }
        public virtual DbSet<ProductImage> ProductImage { get; set; }
        public virtual DbSet<ProductMaterial> ProductMaterial { get; set; }
        public virtual DbSet<ProductOrder> ProductOrder { get; set; }
        public virtual DbSet<RefreshToken> RefreshToken { get; set; }
        public virtual DbSet<User> User { get; set; }
        public virtual DbSet<Wishlist> Wishlist { get; set; }
        public virtual DbSet<WishlistProduct> WishlistProduct { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. See http://go.microsoft.com/fwlink/?LinkId=723263 for guidance on storing connection strings.
                optionsBuilder.UseSqlServer("Data Source=DESKTOP-JU43L1R\\SQLEXPRESS;Initial Catalog=dbOnlineShop; Integrated Security=true; user id=sa1;password=admin123;");
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Cart>(entity =>
            {
                entity.Property(e => e.CartId).HasColumnName("cartId");

                entity.Property(e => e.ClientId).HasColumnName("clientId");

                entity.Property(e => e.TotalPrice)
                    .HasColumnName("totalPrice")
                    .HasDefaultValueSql("((0))");

                entity.HasOne(d => d.Client)
                    .WithMany(p => p.Cart)
                    .HasForeignKey(d => d.ClientId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_Cart_Client");
            });

            modelBuilder.Entity<CartProduct>(entity =>
            {
                entity.Property(e => e.CartProductId).HasColumnName("cartProductId");

                entity.Property(e => e.CartId).HasColumnName("cartId");

                entity.Property(e => e.ProductId).HasColumnName("productId");

                entity.HasOne(d => d.Cart)
                    .WithMany(p => p.CartProduct)
                    .HasForeignKey(d => d.CartId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_CartProduct_Cart");

                entity.HasOne(d => d.Product)
                    .WithMany(p => p.CartProduct)
                    .HasForeignKey(d => d.ProductId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_CartProduct_Product");
            });

            modelBuilder.Entity<Category>(entity =>
            {
                entity.Property(e => e.CategoryId).HasColumnName("categoryId");

                entity.Property(e => e.Active)
                    .IsRequired()
                    .HasColumnName("active")
                    .HasDefaultValueSql("((1))");

                entity.Property(e => e.CategoryName)
                    .IsRequired()
                    .HasColumnName("categoryName")
                    .HasMaxLength(50);

                entity.Property(e => e.CategoryParent)
                    .IsRequired()
                    .HasColumnName("categoryParent")
                    .HasMaxLength(50);

                entity.Property(e => e.Description)
                    .HasColumnName("description")
                    .HasMaxLength(255);
            });

            modelBuilder.Entity<Client>(entity =>
            {
                entity.Property(e => e.ClientId).HasColumnName("clientId");

                entity.Property(e => e.Active)
                    .IsRequired()
                    .HasColumnName("active")
                    .HasDefaultValueSql("((1))");

                entity.Property(e => e.EmailAddress)
                    .IsRequired()
                    .HasColumnName("emailAddress")
                    .HasMaxLength(100)
                    .IsUnicode(false);

                entity.Property(e => e.FirstName)
                    .IsRequired()
                    .HasColumnName("firstName")
                    .HasMaxLength(50);

                entity.Property(e => e.LastName)
                    .IsRequired()
                    .HasColumnName("lastName")
                    .HasMaxLength(50);

                entity.Property(e => e.Password)
                    .IsRequired()
                    .HasColumnName("password")
                    .HasMaxLength(30);

                entity.Property(e => e.PhoneNo).HasColumnName("phoneNo");

                entity.Property(e => e.Username)
                    .IsRequired()
                    .HasColumnName("username")
                    .HasMaxLength(50);

                entity.HasOne(d => d.UsernameNavigation)
                    .WithMany(p => p.Client)
                    .HasForeignKey(d => d.Username)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_Client_User");
            });

            modelBuilder.Entity<ClientAddress>(entity =>
            {
                entity.Property(e => e.ClientAddressId).HasColumnName("clientAddressId");

                entity.Property(e => e.Active)
                    .IsRequired()
                    .HasColumnName("active")
                    .HasDefaultValueSql("((1))");

                entity.Property(e => e.AddressLine)
                    .IsRequired()
                    .HasColumnName("addressLine")
                    .HasMaxLength(255);

                entity.Property(e => e.City)
                    .IsRequired()
                    .HasColumnName("city")
                    .HasMaxLength(50);

                entity.Property(e => e.ClientId).HasColumnName("clientId");

                entity.Property(e => e.Country)
                    .IsRequired()
                    .HasColumnName("country")
                    .HasMaxLength(50);

                entity.Property(e => e.PostalCode).HasColumnName("postalCode");

                entity.HasOne(d => d.Client)
                    .WithMany(p => p.ClientAddress)
                    .HasForeignKey(d => d.ClientId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_ClientAddress_Client");
            });

            modelBuilder.Entity<ClientOrder>(entity =>
            {
                entity.Property(e => e.ClientOrderId).HasColumnName("clientOrderId");

                entity.Property(e => e.Active)
                    .IsRequired()
                    .HasColumnName("active")
                    .HasDefaultValueSql("((1))");

                entity.Property(e => e.ClientId).HasColumnName("clientId");

                entity.Property(e => e.OrderId).HasColumnName("orderId");

                entity.HasOne(d => d.Client)
                    .WithMany(p => p.ClientOrder)
                    .HasForeignKey(d => d.ClientId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_ClientOrder_Client");

                entity.HasOne(d => d.Order)
                    .WithMany(p => p.ClientOrder)
                    .HasForeignKey(d => d.OrderId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_ClientOrder_Order");
            });

            modelBuilder.Entity<Employee>(entity =>
            {
                entity.Property(e => e.EmployeeId).HasColumnName("employeeId");

                entity.Property(e => e.Active)
                    .IsRequired()
                    .HasColumnName("active")
                    .HasDefaultValueSql("((1))");

                entity.Property(e => e.Cnp)
                    .IsRequired()
                    .HasColumnName("cnp")
                    .HasMaxLength(13)
                    .IsUnicode(false)
                    .IsFixedLength();

                entity.Property(e => e.EmailAddress)
                    .IsRequired()
                    .HasColumnName("emailAddress")
                    .HasMaxLength(255);

                entity.Property(e => e.EmploymentDate)
                    .HasColumnName("employmentDate")
                    .HasColumnType("date");

                entity.Property(e => e.FirstName)
                    .IsRequired()
                    .HasColumnName("firstName")
                    .HasMaxLength(50);

                entity.Property(e => e.LastName)
                    .IsRequired()
                    .HasColumnName("lastName")
                    .HasMaxLength(50);

                entity.Property(e => e.Password)
                    .IsRequired()
                    .HasColumnName("password")
                    .HasMaxLength(50);

                entity.Property(e => e.PhoneNo).HasColumnName("phoneNo");

                entity.Property(e => e.Salary).HasColumnName("salary");

                entity.Property(e => e.Username)
                    .IsRequired()
                    .HasColumnName("username")
                    .HasMaxLength(50);

                entity.HasOne(d => d.UsernameNavigation)
                    .WithMany(p => p.Employee)
                    .HasForeignKey(d => d.Username)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_Employee_User");
            });

            modelBuilder.Entity<EmployeeAddress>(entity =>
            {
                entity.Property(e => e.EmployeeAddressId)
                    .HasColumnName("employeeAddressId")
                    .ValueGeneratedNever();

                entity.Property(e => e.Active)
                    .IsRequired()
                    .HasColumnName("active")
                    .HasDefaultValueSql("((1))");

                entity.Property(e => e.AddressLine)
                    .IsRequired()
                    .HasColumnName("addressLine")
                    .HasMaxLength(255);

                entity.Property(e => e.City)
                    .IsRequired()
                    .HasColumnName("city")
                    .HasMaxLength(50);

                entity.Property(e => e.Country)
                    .IsRequired()
                    .HasColumnName("country")
                    .HasMaxLength(50);

                entity.Property(e => e.EmployeeId).HasColumnName("employeeId");

                entity.Property(e => e.PostalCode).HasColumnName("postalCode");

                entity.HasOne(d => d.Employee)
                    .WithMany(p => p.EmployeeAddress)
                    .HasForeignKey(d => d.EmployeeId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_EmployeeAddress_Employee");
            });

            modelBuilder.Entity<EmployeeOrder>(entity =>
            {
                entity.Property(e => e.EmployeeOrderId).HasColumnName("employeeOrderId");

                entity.Property(e => e.Active)
                    .IsRequired()
                    .HasColumnName("active")
                    .HasDefaultValueSql("((1))");

                entity.Property(e => e.EmployeeId).HasColumnName("employeeId");

                entity.Property(e => e.OrderId).HasColumnName("orderId");

                entity.HasOne(d => d.Employee)
                    .WithMany(p => p.EmployeeOrder)
                    .HasForeignKey(d => d.EmployeeId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_EmployeeOrder_Employee");

                entity.HasOne(d => d.Order)
                    .WithMany(p => p.EmployeeOrder)
                    .HasForeignKey(d => d.OrderId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_EmployeeOrder_Order");
            });

            modelBuilder.Entity<Inventory>(entity =>
            {
                entity.Property(e => e.InventoryId).HasColumnName("inventoryId");

                entity.Property(e => e.Active)
                    .IsRequired()
                    .HasColumnName("active")
                    .HasDefaultValueSql("((1))");

                entity.Property(e => e.CreatedAt)
                    .HasColumnName("createdAt")
                    .HasColumnType("date");

                entity.Property(e => e.ModifiedAt)
                    .HasColumnName("modifiedAt")
                    .HasColumnType("date");

                entity.Property(e => e.ProductId).HasColumnName("productId");

                entity.Property(e => e.Quantity).HasColumnName("quantity");

                entity.Property(e => e.Status)
                    .IsRequired()
                    .HasColumnName("status")
                    .HasMaxLength(255);

                entity.HasOne(d => d.Product)
                    .WithMany(p => p.Inventory)
                    .HasForeignKey(d => d.ProductId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_Inventory_Product");
            });

            modelBuilder.Entity<Material>(entity =>
            {
                entity.Property(e => e.MaterialId).HasColumnName("materialId");

                entity.Property(e => e.Active)
                    .IsRequired()
                    .HasColumnName("active")
                    .HasDefaultValueSql("((1))");

                entity.Property(e => e.MaterialName)
                    .IsRequired()
                    .HasColumnName("materialName")
                    .HasMaxLength(50)
                    .IsUnicode(false);
            });

            modelBuilder.Entity<Order>(entity =>
            {
                entity.Property(e => e.OrderId).HasColumnName("orderId");

                entity.Property(e => e.Active)
                    .IsRequired()
                    .HasColumnName("active")
                    .HasDefaultValueSql("((1))");

                entity.Property(e => e.Date)
                    .HasColumnName("date")
                    .HasColumnType("date");

                entity.Property(e => e.Status)
                    .IsRequired()
                    .HasColumnName("status")
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.TotalPrice).HasColumnName("totalPrice");
            });

            modelBuilder.Entity<Product>(entity =>
            {
                entity.Property(e => e.ProductId).HasColumnName("productId");

                entity.Property(e => e.Active)
                    .IsRequired()
                    .HasColumnName("active")
                    .HasDefaultValueSql("((1))");

                entity.Property(e => e.Credits)
                    .HasColumnName("credits")
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.Description)
                    .HasColumnName("description")
                    .HasMaxLength(255)
                    .IsUnicode(false);

                entity.Property(e => e.ImagePath)
                    .HasColumnName("imagePath")
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.Name)
                    .IsRequired()
                    .HasColumnName("name")
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.Price).HasColumnName("price");
            });

            modelBuilder.Entity<ProductCategory>(entity =>
            {
                entity.Property(e => e.ProductCategoryId).HasColumnName("productCategoryId");

                entity.Property(e => e.Active)
                    .IsRequired()
                    .HasColumnName("active")
                    .HasDefaultValueSql("((1))");

                entity.Property(e => e.CategoryId).HasColumnName("categoryId");

                entity.Property(e => e.ProductId).HasColumnName("productId");

                entity.HasOne(d => d.Category)
                    .WithMany(p => p.ProductCategory)
                    .HasForeignKey(d => d.CategoryId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_ProductCategory_Category");

                entity.HasOne(d => d.Product)
                    .WithMany(p => p.ProductCategory)
                    .HasForeignKey(d => d.ProductId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_ProductCategory_Product");
            });

            modelBuilder.Entity<ProductImage>(entity =>
            {
                entity.Property(e => e.ProductImageId).HasColumnName("productImageId");

                entity.Property(e => e.Image)
                    .IsRequired()
                    .HasColumnName("image")
                    .HasMaxLength(50);

                entity.Property(e => e.ImageName)
                    .IsRequired()
                    .HasColumnName("imageName")
                    .HasMaxLength(100);

                entity.Property(e => e.ProductId).HasColumnName("productId");

                entity.HasOne(d => d.Product)
                    .WithMany(p => p.ProductImage)
                    .HasForeignKey(d => d.ProductId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_ProductImage_Product");
            });

            modelBuilder.Entity<ProductMaterial>(entity =>
            {
                entity.Property(e => e.ProductMaterialId).HasColumnName("productMaterialId");

                entity.Property(e => e.Active)
                    .IsRequired()
                    .HasColumnName("active")
                    .HasDefaultValueSql("((1))");

                entity.Property(e => e.MaterialId).HasColumnName("materialId");

                entity.Property(e => e.ProductId).HasColumnName("productId");

                entity.HasOne(d => d.Material)
                    .WithMany(p => p.ProductMaterial)
                    .HasForeignKey(d => d.MaterialId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_ProductMaterial_Material");

                entity.HasOne(d => d.Product)
                    .WithMany(p => p.ProductMaterial)
                    .HasForeignKey(d => d.ProductId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_ProductMaterial_Product");
            });

            modelBuilder.Entity<ProductOrder>(entity =>
            {
                entity.Property(e => e.ProductOrderId).HasColumnName("productOrderId");

                entity.Property(e => e.Active)
                    .IsRequired()
                    .HasColumnName("active")
                    .HasDefaultValueSql("((1))");

                entity.Property(e => e.OrderId).HasColumnName("orderId");

                entity.Property(e => e.ProductId).HasColumnName("productId");

                entity.Property(e => e.Quantity).HasColumnName("quantity");

                entity.HasOne(d => d.Order)
                    .WithMany(p => p.ProductOrder)
                    .HasForeignKey(d => d.OrderId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_ProductOrder_Order");

                entity.HasOne(d => d.Product)
                    .WithMany(p => p.ProductOrder)
                    .HasForeignKey(d => d.ProductId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_ProductOrder_Product");
            });

            modelBuilder.Entity<RefreshToken>(entity =>
            {
                entity.HasKey(e => e.UserId);

                entity.Property(e => e.UserId)
                    .HasColumnName("userId")
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.Active)
                    .IsRequired()
                    .HasColumnName("active")
                    .HasDefaultValueSql("((1))");

                entity.Property(e => e.RefreshToken1).HasColumnName("refreshToken");

                entity.Property(e => e.TokenId)
                    .HasColumnName("tokenId")
                    .HasMaxLength(50)
                    .IsUnicode(false);
            });

            modelBuilder.Entity<User>(entity =>
            {
                entity.Property(e => e.UserId)
                    .HasColumnName("userId")
                    .HasMaxLength(50);

                entity.Property(e => e.Active)
                    .IsRequired()
                    .HasColumnName("active")
                    .HasDefaultValueSql("((1))");

                entity.Property(e => e.Email)
                    .IsRequired()
                    .HasColumnName("email")
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.Password)
                    .IsRequired()
                    .HasColumnName("password")
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.Role)
                    .IsRequired()
                    .HasColumnName("role")
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.Username)
                    .IsRequired()
                    .HasColumnName("username")
                    .HasMaxLength(50)
                    .IsUnicode(false);
            });

            modelBuilder.Entity<Wishlist>(entity =>
            {
                entity.Property(e => e.WishlistId).HasColumnName("wishlistId");

                entity.Property(e => e.Active)
                    .IsRequired()
                    .HasColumnName("active")
                    .HasDefaultValueSql("((1))");

                entity.Property(e => e.ClientId).HasColumnName("clientId");

                entity.HasOne(d => d.Client)
                    .WithMany(p => p.Wishlist)
                    .HasForeignKey(d => d.ClientId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_Wishlist_Client");
            });

            modelBuilder.Entity<WishlistProduct>(entity =>
            {
                entity.Property(e => e.WishlistProductid).HasColumnName("wishlistProductid");

                entity.Property(e => e.ProductId).HasColumnName("productId");

                entity.Property(e => e.WishlistId).HasColumnName("wishlistId");

                entity.HasOne(d => d.Product)
                    .WithMany(p => p.WishlistProduct)
                    .HasForeignKey(d => d.ProductId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_WishlistProduct_Product");

                entity.HasOne(d => d.Wishlist)
                    .WithMany(p => p.WishlistProduct)
                    .HasForeignKey(d => d.WishlistId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_WishlistProduct_Wishlist");
            });

            OnModelCreatingPartial(modelBuilder);
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}
