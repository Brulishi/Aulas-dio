import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Filme } from '../shared/models/filme';
import { ConfigParamsService } from './config-params.service';
import { ConfigPrams } from '../shared/models/config-prams';

const url = "  http://localhost:3000/filmes/";

@Injectable({
  providedIn: 'root'
})
export class FilmesService {

  constructor(private http: HttpClient,
    private configService: ConfigParamsService) { }

  salvar(filme: Filme): Observable <Filme>{
return this.http.post<Filme>(url, filme);
  }

listar(config:ConfigPrams): Observable<Filme[]>{
 const ConfigPrams = this.configService.configurarParametros(config);
return this.http.get<Filme[]>(url, {params: ConfigPrams});
}

}
