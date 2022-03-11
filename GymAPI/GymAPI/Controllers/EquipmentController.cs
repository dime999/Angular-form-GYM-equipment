using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using MoviesAPI.DTOs;
using MoviesAPI.Entities;
using MoviesAPI.Helpers;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MoviesAPI.Controllers
{
    [Route("api/gym")]
    [ApiController]
    public class EquipmentController: ControllerBase
    {
        private readonly ApplicationDbContext context;
        private readonly IMapper mapper;
        private readonly IFileStorageService fileStorageService;
        private string container = "gym";

        public EquipmentController(ApplicationDbContext context, IMapper mapper,
            IFileStorageService fileStorageService)
        {
            this.context = context;
            this.mapper = mapper;
            this.fileStorageService = fileStorageService;
        }

        [HttpGet]
        public ActionResult<List<Equipment>> GetAll()
        {
            var data = context.Equipment.AsQueryable();

            if(data ==null)
            {
                return BadRequest("No data");
            }

            return data.Take(100).ToList();
        }


        [HttpGet("{id:int}")]
        public async Task<ActionResult<EquipmentDTO>> Get(int id)
        {
            var eq = await context.Equipment
               
                .FirstOrDefaultAsync(x => x.Id == id);

            if (eq == null)
            {
                return NotFound();
            }

            var dto = mapper.Map<EquipmentDTO>(eq);
          
            return dto;
        }

     

        [HttpPost]
        public async Task<ActionResult<int>> Post([FromForm] EquipmentCreationDTO x)
        {
            var eq = mapper.Map<Equipment>(x);

            if (x.Picture != null)
            {
                eq.Picture = await fileStorageService.SaveFile(container, x.Picture);
            }

           
            context.Add(eq);
            await context.SaveChangesAsync();
            return eq.Id;
        }

    

        [HttpPut("{id:int}")]
        public async Task<ActionResult> Put(int id, [FromForm] EquipmentCreationDTO x)
        {
            var eq = await context.Equipment
                .FirstOrDefaultAsync(x => x.Id == id);

            if (eq == null)
            {
                return NotFound();
            }

            eq = mapper.Map(x, eq);
             
            if (x.Picture != null)
            {
                eq.Picture = await fileStorageService.EditFile(container, x.Picture,
                    eq.Picture);
            }

         
            await context.SaveChangesAsync();
            return NoContent();
        }


        [HttpDelete("{id:int}")]
        public async Task<ActionResult> Delete(int id)
        {
            var eq = await context.Equipment.FirstOrDefaultAsync(x => x.Id == id);

            if (eq == null)
            {
                return NotFound();
            }

            context.Remove(eq);
            await context.SaveChangesAsync();
            await fileStorageService.DeleteFile(eq.Picture, container);
            return NoContent();
        }
    }
}
