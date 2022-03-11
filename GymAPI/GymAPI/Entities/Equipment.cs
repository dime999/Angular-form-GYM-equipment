using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace MoviesAPI.Entities
{
    public class Equipment
    {
        public int Id { get; set; }
        [StringLength(maximumLength: 75)]
        [Required]
        public string Name { get; set; }
        public string Description { get; set; }
        
        public string Picture { get; set; }
        

    }
}
