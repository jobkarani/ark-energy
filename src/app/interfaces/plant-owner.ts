export enum ProjectType {
    Wind = 'wind',
    Solar = 'solar',
    Hydro = 'hydro',
    Biomass = 'biomass',
  }
  
  export interface PlantOwner {
    full_name: string;
    company: string;
    email: string | null;
    project_name: string;
    phone: string;
    project_type: ProjectType;
    country: string;
  }
