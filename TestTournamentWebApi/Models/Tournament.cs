using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace TestTournamentWebApi.Models
{
    public class Tournament
    {
        [Key]
        public int? ID { get; set; }

        [Required]
        [Column("Game_Name", TypeName = "nvarchar")]
        [MaxLength(50)]
        public string Game_Name { get; set; }

        [Required]
        [Column("Player1", TypeName = "nvarchar")]
        [MaxLength(50)]
        public string Player1 { get; set; }

        [Required]
        [Column("Player2", TypeName = "nvarchar")]
        [MaxLength(50)]
        public string Player2 { get; set; }

        [Required]
        [Column("Who_Won", TypeName = "nvarchar")]
        [MaxLength(50)]
        public string Who_Won { get; set; }
    }
}