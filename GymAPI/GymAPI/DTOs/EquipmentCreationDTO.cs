using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using MoviesAPI.Helpers;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MoviesAPI.DTOs
{
    public class EquipmentCreationDTO
    {
        public string Name { get; set; }
        public string Description { get; set; }
      
        public IFormFile Picture { get; set; }
    

    }
}
