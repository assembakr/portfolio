import { Component } from '@angular/core';
import { IProject } from '../iproject';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {
    selectedProject: any = null;
  show: boolean = false;
  openModal(project: any) {
    this.selectedProject = project;
    this.show = true;
  }

  closeModal() {
    this.selectedProject = null;
    this.show = false;
  }

  projects: IProject[] =[
    {
      Title: 'E-Commerce Website',
      Description: 'A fully responsive online shopping platform featuring product listing, cart functionality, secure checkout, and user authentication. It was designed with a focus on performance and a seamless user experience on both mobile and desktop.',
      ImgSrc: '/ecommerce.jpg',
      Tech: ['Html', 'Css', 'BootStrap', 'JavaScript', 'Angular' ]
    },
    {
      Title: 'Video Summarization Using DL',
      Description: 'A graduation project that automatically generates concise video summaries by extracting key frames and important segments using deep learning-based visual understanding. The system significantly reduces video length while preserving essential content.',
      ImgSrc: 'Summarization.webp',
      Tech: ['Python', 'PyTorch', 'OpenCV', 'Transformers' ]

    },{
      Title: 'Music Genre Classification and Generation',
      Description: 'A deep learning system that classifies music audio into multiple genres and also generates new music samples using neural networks. The model learns musical patterns from spectrograms to enhance prediction quality and creativity.',
      ImgSrc: 'attendance.webp',
      Tech: ['Python', 'TensorFlow', 'Librosa','RNN', 'Autoencoder' ]

    },{
      Title: 'Attendance System Using Face Recognition',
      Description: 'A smart attendance application that detects and recognizes student faces in real time, marking attendance automatically to reduce manual errors and fraud.',
      ImgSrc: 'ecommerce.jpg',
      Tech: ['Python', 'OpenCV', 'Dlib', 'Face Recognition', 'Flask' ]

    },
        {
      Title: 'E-Commerce Website',
      Description: 'A fully responsive online shopping platform featuring product listing, cart functionality, secure checkout, and user authentication. It was designed with a focus on performance and a seamless user experience on both mobile and desktop.',
      ImgSrc: '/ecommerce.jpg',
      Tech: ['Html', 'Css', 'BootStrap', 'JavaScript', 'Angular' ]
    },
    {
      Title: 'Video Summarization Using DL',
      Description: 'A graduation project that automatically generates concise video summaries by extracting key frames and important segments using deep learning-based visual understanding. The system significantly reduces video length while preserving essential content.',
      ImgSrc: 'Summarization.webp',
      Tech: ['Python', 'PyTorch', 'OpenCV', 'Transformers' ]

    },{
      Title: 'Music Genre Classification and Generation',
      Description: 'A deep learning system that classifies music audio into multiple genres and also generates new music samples using neural networks. The model learns musical patterns from spectrograms to enhance prediction quality and creativity.',
      ImgSrc: 'attendance.webp',
      Tech: ['Python', 'TensorFlow', 'Librosa','RNN', 'Autoencoder' ]

    },{
      Title: 'Attendance System Using Face Recognition',
      Description: 'A smart attendance application that detects and recognizes student faces in real time, marking attendance automatically to reduce manual errors and fraud.',
      ImgSrc: 'ecommerce.jpg',
      Tech: ['Python', 'OpenCV', 'Dlib', 'Face Recognition', 'Flask' ]

    },    {
      Title: 'E-Commerce Website',
      Description: 'A fully responsive online shopping platform featuring product listing, cart functionality, secure checkout, and user authentication. It was designed with a focus on performance and a seamless user experience on both mobile and desktop.',
      ImgSrc: '/ecommerce.jpg',
      Tech: ['Html', 'Css', 'BootStrap', 'JavaScript', 'Angular' ]
    },
    {
      Title: 'Video Summarization Using DL',
      Description: 'A graduation project that automatically generates concise video summaries by extracting key frames and important segments using deep learning-based visual understanding. The system significantly reduces video length while preserving essential content.',
      ImgSrc: 'Summarization.webp',
      Tech: ['Python', 'PyTorch', 'OpenCV', 'Transformers' ]

    },{
      Title: 'Music Genre Classification and Generation',
      Description: 'A deep learning system that classifies music audio into multiple genres and also generates new music samples using neural networks. The model learns musical patterns from spectrograms to enhance prediction quality and creativity.',
      ImgSrc: 'attendance.webp',
      Tech: ['Python', 'TensorFlow', 'Librosa','RNN', 'Autoencoder' ]

    },{
      Title: 'Attendance System Using Face Recognition',
      Description: 'A smart attendance application that detects and recognizes student faces in real time, marking attendance automatically to reduce manual errors and fraud.',
      ImgSrc: 'ecommerce.jpg',
      Tech: ['Python', 'OpenCV', 'Dlib', 'Face Recognition', 'Flask' ]

    },    {
      Title: 'E-Commerce Website',
      Description: 'A fully responsive online shopping platform featuring product listing, cart functionality, secure checkout, and user authentication. It was designed with a focus on performance and a seamless user experience on both mobile and desktop.',
      ImgSrc: '/ecommerce.jpg',
      Tech: ['Html', 'Css', 'BootStrap', 'JavaScript', 'Angular' ]
    },
    {
      Title: 'Video Summarization Using DL',
      Description: 'A graduation project that automatically generates concise video summaries by extracting key frames and important segments using deep learning-based visual understanding. The system significantly reduces video length while preserving essential content.',
      ImgSrc: 'Summarization.webp',
      Tech: ['Python', 'PyTorch', 'OpenCV', 'Transformers' ]

    },{
      Title: 'Music Genre Classification and Generation',
      Description: 'A deep learning system that classifies music audio into multiple genres and also generates new music samples using neural networks. The model learns musical patterns from spectrograms to enhance prediction quality and creativity.',
      ImgSrc: 'attendance.webp',
      Tech: ['Python', 'TensorFlow', 'Librosa','RNN', 'Autoencoder' ]

    }
  ];
}
