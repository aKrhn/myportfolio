import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Education from './education';
import Experience from './experience';
import Skills from './skills';

class Resume extends Component {
  render() {
    return(
      <div>
        <Grid>
          <Cell col={4}>
            <div style={{textAlign: 'center'}}>
            <img
              src="https://www.shareicon.net/download/2015/09/18/103157_man_512x512.png"
              alt="avatar"
              style={{height: '200px'}}
            />
            </div>
            <h2 style={{paddingTop: '2em'}}>
              M.Abdullah Karahan
            </h2>
            <h4 style={{color: 'grey'}}>
              Coder
            </h4>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
            <p>HTML , CSS , JavaScript , React , NodeJS</p>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
            <h5>
              Yardım
            </h5>
            <p>
              Gece bunu bitirmek için uyumamanın 3 yolu
            </p>
            <h5>Phone</h5>
            <p>(213215163</p>
            <h5>Email</h5>
            <p>abdllhkarahan@gmail.com</p>
            <h5>Web</h5>
            <p>www.hire-me.com</p>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
          </Cell>
          <Cell
            className="resume-right-col"
            col={8}>
            <h2>Eğitim</h2>
            <Education
              startYear={2017}
              endYear={2021}
              schoolName="YBU"
              schoolDescription="Uluslararası İlişkiler 1.sınıf öğrencisiyim.Derslerim hafif ve devam zorunluluğum yok.Tam zamanlı çalışmaya uygun bir okulum var ve kendimi önyüz geliştiricisi olarak yetiştirmek istiyorum.C2 seviye ingilizce biliyor ve akıcı şekilde konuşabiliyorum."
               />
               <Education
                 startYear={2007}
                 endYear={2009}
                 schoolName="Ankara Uni"
                 schoolDescription="Bu sadece ekstra bir gösterge."
                  />
                <hr style={{borderTop: '3px solid #e22947'}} />
              <h2>Experience</h2>
            <Experience
              startYear={2009}
              endYear={2012}
              jobName="İlk"
              jobDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
            />
            <Experience
              startYear={2012}
              endYear={2016}
              jobName="İkinci"
              jobDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
            />
              <hr style={{borderTop: '3px solid #e22947'}} />
            <h2>Skills</h2>
            <Skills
              skill="javascript"
              progress={100}
            />
            <Skills
              skill="HTML/CSS"
              progress={80}
            />
            <Skills
              skill="NodeJS"
              progress={50}
            />
            <Skills
              skill="React"
              progress={100}
            />
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Resume;