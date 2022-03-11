using AutoMapper;
using MoviesAPI.DTOs;
using MoviesAPI.Entities;
using NetTopologySuite.Geometries;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MoviesAPI.Helpers
{
    public class AutoMapperProfiles : Profile
    {
        public AutoMapperProfiles(GeometryFactory geometryFactory)
        {


            CreateMap<EquipmentCreationDTO, Equipment>()
                .ForMember(x => x.Picture, options => options.Ignore());
                

            CreateMap<Equipment, EquipmentDTO>().ReverseMap();
               

        }


    }
}
