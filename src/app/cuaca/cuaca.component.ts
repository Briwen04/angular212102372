import { HttpClient } from '@angular/common/http';
import { AfterViewInit, Component, OnInit, Renderer2 } from '@angular/core';

declare const $ : any;
declare const moment : any;

@Component({
  selector: 'app-cuaca',
  templateUrl: './cuaca.component.html',
  styleUrls: ['./cuaca.component.css']
})

export class CuacaComponent implements OnInit, AfterViewInit {
  private table1: any;
  formattedSunrise: string = '';
  formattedSunset: string = '';

  constructor(private renderer : Renderer2, private http : HttpClient) {}
  
  ngAfterViewInit(): void {
    this.renderer.removeClass(document.body, "sidebar-open");
    this.renderer.addClass(document.body, "sidebar-closed");

    this.table1 = $("#table1").DataTable
    (
      {
        "columnDefs" :
        [
          {
            "targets" : 0,
            "render" : function (data: string)
            {
              var waktu = moment(data + " UTC");
              console.log(waktu);

              var html = waktu.local().format("YYYY-MM-DD") + "<br />" + waktu.local().format("HH:mm") + " WIB";
              return html;
            }
          },
          {
            "targets" : 1,
            "render" : function (data: string)
            {
              var html = "<img src='" + data + "' />";
              return html;
            }
          },
          {
            "targets" : 2,
            "render" : function (data: string)
            {
              var array = data.split('||');
              var cuaca = array[0];
              var deskripsi = array[1];
              var html = "<strong>" + cuaca + "</strong><br />" + deskripsi;
              return html;
            }
          }
        ]
      }
    );
    
    this.bind_table1();
    this.bindSunriseSunset();
  }

  bindSunriseSunset(): void {
    this.http
      .get('https://api.openweathermap.org/data/2.5/weather?id=1630789&appid=df9cc5c8351c3c40f20ed31601b8534b')
      .subscribe((data: any) => {
        console.log(data);
  
        if (data.sys && data.sys.sunrise && data.sys.sunset) {
          const sunriseTimestamp = data.sys.sunrise;
          const sunsetTimestamp = data.sys.sunset;
  
          this.formattedSunrise = this.formatTimestamp(sunriseTimestamp);
          this.formattedSunset = this.formatTimestamp(sunsetTimestamp);
  
        } else {
          console.error('Error: Sunrise or sunset data not available in the response.');
        }
      });
  }
  

  formatTimestamp(timestamp: number): string {
    const formattedTime = moment(timestamp * 1000).format('DD-MM-YYYY HH:mm:ss');
    return formattedTime;
  }

  bind_table1(): void {
    this.http.get("https://api.openweathermap.org/data/2.5/forecast?id=1630789&appid=df9cc5c8351c3c40f20ed31601b8534b")
      .subscribe((data: any) => {
        console.log(data);

        var list = data.list;
        console.log(list);

        this.table1.clear();

        list.forEach((element: any) => {
          var weather = element.weather[0];
          console.log(weather);

          var iconUrl = "https://openweathermap.org/img/wn/" + weather.icon + "@2x.png";
          var cuacaDeskripsi = weather.main + "||" + weather.description;

          var main = element.main;
          console.log(main);

          var tempMin = this.kelvinToCelcius(main.temp_min);
          console.log("tempMin : " + tempMin);

          var tempMax = this.kelvinToCelcius(main.temp_max);
          console.log("tempMax : " + tempMax);

          var temp = tempMin + "°C - " + tempMax + "°C"

          var row = [
            element.dt_txt,
            iconUrl,
            cuacaDeskripsi,
            temp
          ]

          this.table1.row.add(row);
        });

        this.table1.draw(false);
      }
    );
  }

  kelvinToCelcius(kelvin : any) : any {
    var celcius = kelvin - 273.15;
    celcius = Math.round(celcius * 100) / 100;
    return celcius;
  }

  ngOnInit(): void {
  }

}



 
