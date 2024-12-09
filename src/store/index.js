import { createStore } from 'vuex'
import axios from 'axios'
import Swal from 'sweetalert2/dist/sweetalert2' 

const portfolioURL = 'https://leahbasson.github.io/vueportfoliodata/data/'

export default createStore({
  state: {
    about: null,
    quote: null,
    education: null,
    experience: null,
    subjects: null,
    skills: null,
    testimonials: null,
    projects: null,
    certificateIntro: null,
    certificates: null,
    badgeIntro: null,
    caseStudies: null
  },
  getters: {
  },
  mutations: {
    setAbout(state, value) { 
      state.about = value
    },
    setQuote(state, value) {
      state.quote = value
    },
    setEducation(state, value) { 
      state.education = value
    },
    setExperience(state, value) { 
      state.experience = value
    },
    setSubject(state, value) { 
      state.subjects = value
    },
    setSkills(state, value) { 
      state.skills = value
    },
    setTestimonials(state, value) { 
      state.testimonials = value
    },
    setProjects(state, value) { 
      state.projects = value
    },
    setCertificateIntro(state, value){
      state.certificateIntro = value
    },
    setCertificates(state, value){
      state.certificates = value
    },
    setBadgeIntro(state, value){
      state.badgeIntro = value
    },
    setCaseStudies(state, value){
      state.caseStudies = value
    }
  },
  actions: {
    async fetchAbout(context) {
      try {
        let { about } = await (await axios.get(portfolioURL)).data
        context.commit("setAbout", about)
      } catch (e) { 
        Swal.fire({
          title: "Error",
          text: "Failed to fetch data",
          icon: "error",
          timer: 2000
        })
      }
    },
    async fetchQuote(context) {
      try {
        let { quote } = await (await axios.get(portfolioURL)).data
        context.commit("setQuote", quote)
      } catch (e) { 
        Swal.fire({
          title: "Error",
          text: "Failed to fetch data",
          icon: "error",
          timer: 2000
        })
      }
    },
    async fetchEducation(context) {
      try {
        let { education } = await (await axios.get(portfolioURL)).data
        context.commit("setEducation", education)
      } catch (e) { 
        Swal.fire({
          title: "Error",
          text: "Failed to fetch data - education",
          icon: "error",
          timer: 2000
        })
      }
    },
    async fetchExperience(context) {
      try {
        let { experience } = await (await axios.get(portfolioURL)).data
        context.commit("setExperience", experience)
      } catch (e) { 
        Swal.fire({
          title: "Error",
          text: "Failed to fetch data - experience",
          icon: "error",
          timer: 2000
        })
      }
    },
    async fetchSubject(context) {
      try {
        let { subjects } = await (await axios.get(portfolioURL)).data
        context.commit("setSubject", subjects)
      } catch (e) { 
        Swal.fire({
          title: "Error",
          text: "Failed to fetch data - subjects",
          icon: "error",
          timer: 2000
        })
      }
    },
    async fetchSkills(context) {
      try {
        let { skills } = await (await axios.get(portfolioURL)).data
        context.commit("setSkills", skills)
      } catch (e) { 
        Swal.fire({
          title: "Error",
          text: "Failed to fetch data - skills",
          icon: "error",
          timer: 2000
        })
      }
    },
    async fetchTestimonials(context) {
      try {
        let { testimonials } = await (await axios.get(portfolioURL)).data
        context.commit("setTestimonials", testimonials)
      } catch (e) { 
        Swal.fire({
          title: "Error",
          text: "Failed to fetch data - testimonials",
          icon: "error",
          timer: 2000
        })
      }
    },
    async fetchProjects(context) {
      try {
        let { projects } = await (await axios.get(portfolioURL)).data
        context.commit("setProjects", projects)
      } catch (e) { 
        Swal.fire({
          title: "Error",
          text: "Failed to fetch data - projects",
          icon: "error",
          timer: 2000
        })
      }
    },
    async fetchCertificateIntro(context) {
      try {
        let { certificateIntro } = await (await axios.get(portfolioURL)).data
        context.commit("setCertificateIntro", certificateIntro)
      } catch (e) { 
        Swal.fire({
          title: "Error",
          text: "Failed to fetch data - certificate intro",
          icon: "error",
          timer: 2000
        })
      }
    },
    async fetchCertificates(context) {
      try {
        let { certificates } = await (await axios.get(portfolioURL)).data
        context.commit("setCertificates", certificates)
      } catch (e) { 
        Swal.fire({
          title: "Error",
          text: "Failed to fetch data - certificates",
          icon: "error",
          timer: 2000
        })
      }
    },
    async fetchBadgeIntro(context) {
      try {
        let { badgeIntro } = await (await axios.get(portfolioURL)).data
        context.commit("setBadgeIntro", badgeIntro)
      } catch (e) { 
        Swal.fire({
          title: "Error",
          text: "Failed to fetch data - badges",
          icon: "error",
          timer: 2000
        })
      }
    },
    async fetchCaseStudies(context) {
      try {
        let { caseStudies } = await (await axios.get(portfolioURL)).data
        context.commit("setCaseStudies", caseStudies)
      } catch (e) { 
        Swal.fire({
          title: "Error",
          text: "Failed to fetch data - case studies",
          icon: "error",
          timer: 2000
        })
      }
    }
  },
  modules: {
  }
})
