export interface Resume {
  _id: string;
  profile: Profile;
  skills: Skill[];
  knowledge: string;
  experience: Experience[];
  projects: Project[];
  lang: string;
}

export interface Profile {
  // 姓名
  name: string;
  // 自我介绍
  about: string;
  // 学历
  education: string;
  // 地点
  location: string;
  // 出生年份
  birthYear: string;
  // 职位
  position: string;
  // 邮箱
  email: string;
  // 电话
  phone: string;
  // 个人网站
  website: string;
  // github用户名
  githubName: string;
}

export interface Skill {
  _id: string;
  name: string;
  level: number;
  iconUri: string;
}

export interface Experience {
  _id: string;
  company: string;
  position: string;
  startTime: Date;
  endTime: Date;
  description: string;
}

export interface Project {
  _id: string;
  name: string;
  platform: string;
  timeperiod: string[];
  description: string;
  url: string;
}
