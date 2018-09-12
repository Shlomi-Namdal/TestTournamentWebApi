using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Data.Entity.ModelConfiguration.Conventions;
using System.Linq;
using System.Web;

namespace TestTournamentWebApi.Models
{
    public class DataContext : DbContext
    {
        public DataContext() : base("name=TestTournament")
        {
            Database.SetInitializer(new DropCreateDatabaseIfModelChanges<DataContext>());
            //Database.SetInitializer(new DropCreateDatabaseAlways<DataContext>());
        }
        //the name of the class is the same name of table
        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);
            //set the same name from Kode to Sql
            modelBuilder.Conventions.Remove<PluralizingTableNameConvention>();
        }

        public virtual DbSet<TestTournamentWebApi.Models.Tournament> Tournament { get; set; }
    }
}