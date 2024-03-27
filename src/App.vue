<template>
  <v-app id="inspire" style="background-color: #000;" color="#000">

    <v-navigation-drawer theme="dark" v-model="drawer" style="background-color: #000;border-right: 1px solid #FFF;">
      
      <v-layout>
        <v-btn v-if="$vuetify.display.mobile"
              icon="mdi-window-close"
              variant="plain"
              @click.stop="drawer = !drawer" 
              style="margin-top: -15px;margin-left: -15px"
        >
        </v-btn>
      </v-layout>
      
      <v-img style="cursor: pointer;"
          src="/img/logos/hscreations_logo_blue.png"
          @click="routerGo('/')"
      ></v-img>


      <v-list density="compact" style="width: 100%" class="py-4">

          <v-btn variant="outlined" 
                 block  
                 color="white" 
                 style="text-transform: none !important;"
                 @click="scrollToTop($vuetify.display.mobile)" 
          >
              Home
          </v-btn>
          <v-btn variant="outlined" 
                 block color="white" 
                 class="mt-4" 
                 style="text-transform: none !important;"
                 @click="scrollToApps($vuetify.display.mobile)"
          >
            Story
          </v-btn>
          <v-btn variant="outlined" 
                 block 
                 color="white" 
                 @click="scrollToCollections($vuetify.display.mobile)"
                 class="mt-4" 
                 style="text-transform: none !important;"
          >
              NFT Collections
          </v-btn>
          <v-btn variant="outlined" 
                 block 
                 color="white" 
                 @click="scrollToNFTLaunch($vuetify.display.mobile)"
                 class="mt-4" 
                 style="text-transform: none !important;"
          >
              NFT Launch Info
          </v-btn>
          <v-btn variant="outlined" 
                 block color="white" 
                 class="mt-4" style="text-transform: none !important;"
                 @click="scrollToFooter($vuetify.display.mobile)"
          >
            Socials
          </v-btn>

      </v-list>

    </v-navigation-drawer>

    <!-- style="border-bottom: 1px solid #FFF;" -->
    <v-app-bar  
               theme="dark" 
               :elevation="0" 
               height="80" 
               :color="!scrolled ? 'transparent' : '#000'" 
               style="opacity: 0.8;"
    >

      <v-icon class="ml-4" v-if="drawer" @click="drawer = !drawer" size="50" color="#a2c4c9">mdi-menu-open</v-icon>
      <!-- <v-icon class="ml-4" v-if="drawer" @click="drawer = !drawer" size="50" color="#a2c4c9">mdi-menu</v-icon> -->


        <v-img v-if="!drawer"  style="max-height:80px;max-width:388px;cursor: pointer;"
          src="/img/logos/hscreations_logo_hx_blue.png"
          @click="drawer = !drawer"
        ></v-img>

        <v-spacer></v-spacer>

        <v-layout v-if="!drawer" style="margin-right:20px">

          <v-spacer></v-spacer>

          <v-btn v-if="!$vuetify.display.mobile"
            variant="text"
            color="#87bbff"
            theme="dark"
            style="text-transform: none !important;font-size: 1.3rem;"
            @click="scrollToTop($vuetify.display.mobile)"
          >
            Home
          </v-btn>

          <v-btn v-if="!$vuetify.display.mobile"
            variant="text"
            color="#87bbff"
            theme="dark"
            style="text-transform: none !important;font-size: 1.3rem;"
            @click="scrollToApps($vuetify.display.mobile)"
          >
            Story
          </v-btn>

          <v-btn v-if="!$vuetify.display.mobile"
            color="#87bbff"
            theme="dark"
            style="text-transform: none !important;font-size: 1.3rem;"
            @click="scrollToCollections($vuetify.display.mobile)"
          >
            NFT Collections
          </v-btn>

          <v-btn v-if="!$vuetify.display.mobile"
            color="#87bbff"
            theme="dark"
            style="text-transform: none !important;font-size: 1.3rem;"
            @click="scrollToNFTLaunch($vuetify.display.mobile)"
          >
            NFT Launch Info
          </v-btn>

          <v-btn v-if="!$vuetify.display.mobile"
            variant="text"
            color="#87bbff"
            theme="dark"
            style="text-transform: none !important;font-size: 1.3rem;"
            @click="scrollToFooter($vuetify.display.mobile)"
          >
            Socials
          </v-btn>

          <v-btn v-if="$vuetify.display.mobile"
                  variant="icon"
                  size="large"
                  @click.stop="drawer = !drawer"
                  color="#87bbff"
        >
          <v-icon size="large">mdi-menu</v-icon>
        </v-btn>

        </v-layout>

    </v-app-bar>

    <v-main>
      <!--  -->
      <router-view :drawer="drawer" :isMobile="isMobileDevice">
      </router-view>
    
    <v-sheet style="background: rgb(135,187,255);background: linear-gradient(180deg, rgba(135,187,255,1) 0%, rgba(0,0,0,1) 100%);" height="10">

    </v-sheet>
    <div id="footer">
      <v-footer
      class="bg-black text-center d-flex flex-column"
        >
        <v-row class="mt-2" :align="'center'" style="width:100%">

          <v-col cols="12" md="3">
          </v-col>

          <v-col cols="12" md="6">

            <div style="text-align: center;">

              <v-tooltip text="Telegram Official" location="top">
                <template v-slot:activator="{ props }">
                  <v-btn variant="text" class="mx-1">
                    <v-img 
                      src="/img/icons/telegram.png" 
                      style="width:24px;height:24px;padding-top:4px" 
                      @click="gotoLink('https://t.me/hscreations_art')"
                      v-bind="props"
                    />
                  </v-btn>
                </template>
              </v-tooltip>

              <v-tooltip text="X (Twitter)" location="top">
                <template v-slot:activator="{ props }">
                  <v-btn variant="text" class="mx-1">
                    <v-img 
                      src="/img/icons/x_logo.png" 
                      style="width:22px;height:22px;padding-top:4px"
                      @click="gotoLink('https://twitter.com/hscreations_art')"
                      v-bind="props"
                    />
                  </v-btn>
                </template>
              </v-tooltip>

              <!-- <v-tooltip text="Discord" location="top">
                <template v-slot:activator="{ props }">
                  <v-btn variant="text" class="mx-2 mt-1">
                    <v-img 
                      src="/img/icons/discord.png" 
                      style="width:24px;height:24px;padding-top:4px"
                      @click="gotoLink('https://discord.gg/ZAPN')"
                      v-bind="props"
                    />
                  </v-btn>
                </template>
              </v-tooltip> -->

              <v-tooltip text="Instagram" location="top">
                <template v-slot:activator="{ props }">
                  <v-btn
                    class="mx-2 mt-1"
                    icon="mdi-instagram"
                    variant="text"
                    @click="gotoLink('https://www.instagram.com/hscreations_art/')"
                    v-bind="props"
                  ></v-btn>
                </template>
              </v-tooltip>
            </div>
          </v-col>

          <v-col cols="12" md="3">
          </v-col>
          
          </v-row>

          <v-row class="mt-4 mb-1" style="width:100%">
          <v-col cols="12" md="3" :align="'center'">
            <v-img
              src="/img/logos/hscreations_logo_blue.png"
              style="max-height: 250px; max-width: 164px;"
            ></v-img>
          </v-col>
          <v-col cols="12" md="6">
            <div class="pt-4 mb-4 mr-8 ml-8" style="text-align: justify;">
              Embark on a mesmerizing journey into the boundless realm of our NFT collections, 
              where art transcends boundaries and imagination knows no limits. Step through the portals of creativity and immerse yourself in a world where each pixel tells a story, 
              each brushstroke evokes emotion, and each composition ignites the senses.
            </div>
          </v-col>

          <v-col cols="12" md="3" :align="isMobileDevice ? 'center' : ''" class="pl-4 pt-5">
            <v-btn variant="text" style="text-transform: none !important;" @click="termsDialog = true">
              Terms and Conditions
            </v-btn>
            <v-btn variant="text" style="text-transform: none !important;" @click="privacyDialog = true">
              Privacy Policy
            </v-btn>

          </v-col>
        </v-row>

          <v-divider></v-divider>

          <v-row class="mt-8 mb-1" style="width:100%">
          <v-col cols="12" class="d-flex justify-center" v-if="isMobileDevice">
            <span style="font-size: 16px; color:#FFF;">Copyright &copy;H.S. Creations Art, {{ new Date().getFullYear() }}</span>
          </v-col>
          <v-layout v-if="!isMobileDevice" style="width:100%" class="mr-2 ml-4">
            <span style="font-size: 16px; color:#FFF;">&copy;H.S. Creations Art, {{ new Date().getFullYear() }} </span>
            <v-spacer v-if="!isMobileDevice"></v-spacer>
            <span style="font-size: 16px; color:#FFF;" v-if="!isMobileDevice">
              <v-btn
                variant="text"
                style="color:#FFF;text-transform: none !important;margin-top: -5px;"
                @click="gotoLink('mailto:hscreations.art@gmail.com')">
              <v-icon 
                left
                :color="'white'"
                >mdi-email</v-icon> hscreations.art@gmail.com
              </v-btn>
            </span>
          </v-layout>
        </v-row>
        </v-footer>
      </div>
    </v-main>
  </v-app>
</template>

<script>
import { scroller } from 'vue-scrollto/src/scrollTo'
import { isMobile } from 'mobile-device-detect';
export default {
  data: () => ({
      drawer: false,
      isMobileDevice: false,
      currentAppVersion: 'V1.0.12',
      scrolled: false
  }),
  components: {
    // HelloWorld
  },
  destroyed () {
    window.removeEventListener('scroll', this.handleScroll)
  },
  created() {
    window.addEventListener('scroll', this.handleScroll)
    this.scrollToTop()
    this.isMobileDevice = isMobile
  },
  methods: { 
    gotoLink(link) {
      // console.log('button clicked')
      window.open(link, "_blank");
    },
    handleScroll () {
      // console.log(window.scrollY)
      if (window.scrollY > 150 && this.isMobile) {
        this.scrolled = true
      } else if (window.scrollY > 150 && !this.isMobile) {
        this.scrolled = true
      } else {
        this.scrolled = false
      }
    },
    scrollToTop (mobile) {
      const firstScrollTo = scroller();
      this.scrollClicked = true
      setTimeout(() => {
        firstScrollTo('#inspire', 500, { offset: 0 });
      }, 200);
      if (mobile) this.drawer = false
    },
    scrollToApps (mobile) {
      const firstScrollTo = scroller();
      this.scrollClicked = true
      setTimeout(() => {
        firstScrollTo('#story', 500, { offset: -100 });
      }, 200);
      if (mobile) this.drawer = false
    },
    scrollToCollections (mobile) {
      const firstScrollTo = scroller();
      this.scrollClicked = true
      setTimeout(() => {
        firstScrollTo('#collections', 500, { offset: -100 });
      }, 200);
      if (mobile) this.drawer = false
    },
    scrollToNFTLaunch (mobile) {
      const firstScrollTo = scroller();
      this.scrollClicked = true
      setTimeout(() => {
        firstScrollTo('#launch', 500, { offset: -100 });
      }, 200);
      if (mobile) this.drawer = false
    },
    scrollToFooter (mobile) {
      const firstScrollTo = scroller();
      this.scrollClicked = true
      setTimeout(() => {
        firstScrollTo('#footer', 500, { offset: -100 });
      }, 200);
      if (mobile) this.drawer = false
    }
  }

}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Anton&family=Cutive+Mono&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Exo+2:ital,wght@0,100..900;1,100..900&display=swap');
#app {
  font-family: 'Exo 2', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #FFF;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
