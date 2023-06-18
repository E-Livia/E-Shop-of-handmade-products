using EShop_backend.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Threading.Tasks;

namespace EShop_backend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CategoryController : ControllerBase
    {
        private readonly IConfiguration _configuration;

        public CategoryController(IConfiguration configuration)
        {
            _configuration = configuration;
        }

        [HttpGet]
        public JsonResult GetAllActiveCategories()
        {
            string query = @"
                    exec GetAllActiveCategories";
            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("ProductAppCon");
            SqlDataReader myReader;
            using (SqlConnection myCon = new SqlConnection(sqlDataSource))
            {
                myCon.Open();
                using (SqlCommand myCommand = new SqlCommand(query, myCon))
                {
                    myReader = myCommand.ExecuteReader();
                    table.Load(myReader);

                    myReader.Close();
                    myCon.Close();
                }
            }

            return new JsonResult(table);
        }

        [HttpGet("{categoryParent}")]
        public JsonResult GetAllCategoryByParent(string categoryParent)
        {
            var query = "EXEC GetCategoriesByParent @categoryParent";
            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("ProductAppCon");
            SqlDataReader myReader;
            using (SqlConnection myCon = new SqlConnection(sqlDataSource))
            {
                myCon.Open();
                using (SqlCommand myCommand = new SqlCommand(query, myCon))
                {
                    myCommand.Parameters.AddWithValue("@categoryParent", categoryParent);
                    myReader = myCommand.ExecuteReader();
                    table.Load(myReader);

                    myReader.Close();
                    myCon.Close();
                }
            }

            return new JsonResult(table);
        }

        [Route("parentsForCategories")]
        [HttpGet]
        public JsonResult GetParentsForCategories ()
        {
            var query = "EXEC GetParentsForCategories";
            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("ProductAppCon");
            SqlDataReader myReader;
            using (SqlConnection myCon = new SqlConnection(sqlDataSource))
            {
                myCon.Open();
                using (SqlCommand myCommand = new SqlCommand(query, myCon))
                {
                    myReader = myCommand.ExecuteReader();
                    table.Load(myReader);

                    myReader.Close();
                    myCon.Close();
                }
            }

            return new JsonResult(table);
        }

        [HttpPost]
        public JsonResult InsertCategory(Category cat)
        {
            string query = @"
                            insert into dbo.Category values
                            ('" + cat.CategoryName + @"',
                            '" + cat.Description + @"',
                            '" + cat.Active + @"')
                            ";
            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("ProductAppCon");
            SqlDataReader myReader;
            using (SqlConnection myCon = new SqlConnection(sqlDataSource))
            {
                myCon.Open();
                using (SqlCommand myCommand = new SqlCommand(query, myCon))
                {

                    myReader = myCommand.ExecuteReader();
                    table.Load(myReader);

                    myReader.Close();
                    myCon.Close();
                }
            }

            return new JsonResult("Added successfully");
        }

    }
}
