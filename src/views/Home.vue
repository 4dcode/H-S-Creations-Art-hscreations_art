<template>
  <div id="home">

    <v-row style="margin-top:-80px">
      
      <v-img v-if="!$vuetify.display.mobile"
        :src="'/img/home/hs_home_' + randomHome + '.webp'"
        class="align-end"
      > 
          <v-row>
            <v-col cols="12" class="mb-16">
                <!-- <v-card class="pa-2 ma-2" color="transparent" elevation="0">
                    <div class="text-h4 text-center font-weight-bold text-white" style="text-shadow: 1px 1px 2px black, 0 0 25px #637781, 0 0 5px #637781;">NFT SALE OPENS 0N</div>
                    <div class="text-h4 text-center font-weight-bold  text-white" style="text-shadow: 1px 1px 2px black, 0 0 25px #637781, 0 0 5px #637781;">02 APRIL, 2024 - 10:00 UTC</div>
                </v-card> -->
                <v-btn color="#FFF" dark variant="flat" size="x-large" style="text-transform: none !important;opacity:0.7" class="mb-2" href="https://opensea.io/collection/infinity-by-hs/overview" target="_blank">
                  <v-img src="/img/icons/opensea.png" style="max-width:32px;margin-right:10px" ></v-img>
                    Minting now on OpenSea!
                </v-btn>
            </v-col>
        </v-row>
      </v-img>
 v 
      <v-img v-if="$vuetify.display.mobile"
        :src="'/img/home/hs_home_mobile_' + randomHome + '.webp'"
        class="align-end"
      >
        <v-row class="mb-2">
            <v-col cols="12" class="mb-16">
                <!-- <v-card class="pa-2 ma-2" color="transparent" elevation="0">
                    <div class="text-h5 text-center font-weight-bold text-white" style="text-shadow: 1px 1px 2px black, 0 0 25px #637781, 0 0 5px #637781;">NFT SALE OPENS 0N</div>
                    <div class="text-h5 text-center font-weight-bold  text-white" style="text-shadow: 1px 1px 2px black, 0 0 25px #637781, 0 0 5px #637781;">02 APRIL, 2024 - 10:00 UTC</div>
                </v-card> -->
                <v-btn color="#FFF" variant="flat" size="large" style="text-transform: none !important;opacity:0.9" class="mb-2" href="https://opensea.io/collection/infinity-by-hs/overview" target="_blank">
                  <v-img src="/img/icons/opensea.png" style="max-width:32px;margin-right:10px" ></v-img>
                    Minting now on OpenSea!
                </v-btn>
            </v-col>
        </v-row>
      </v-img>

    </v-row>

  </div>

  <div id="story" >

    <v-row :class="$vuetify.display.mobile ? 'ma-2 mt-16' : 'ma-16'">
     
      <v-card theme="dark" 
              width="100%"
              class="mt-8"
              :min-height="drawer ? 370 : 450"
              color="#000"
              style="border: 1px solid white"
      >

        <v-row :align="'center'">


          <v-col cols="12" md="6" :align="'center'">
            
            <v-img 
              src="/img/home/hs_story_01.webp"
            ></v-img>

          </v-col>

          <v-col cols="12" md="6" :align="'left'" class="pa-8">

            <p style="font-size:1.5rem;font-weight:bold">Art That Echoes In Your Soul: A Bold Investment</p>
            <p class="pt-4" :style="drawer ? 'font-size:1.2rem;' : 'font-size:1.3rem;'">My obsession lies in those fleeting moments where the preciousness of existence shines against the backdrop of its inevitable end.  It's not about shock value or simple darkness. My work seeks to capture a profound sense of unease, prompting an introspective examination of what it means to be alive.<br><br>
              This work is not for the casual viewer. It's for those who value art that transcends the surface, collectors seeking an echo of their own existential questions reflected back at them.  Owning one of my NFTs is not merely possession, it's a portal to a visceral exploration of the human condition.  A visceral reminder to fully embrace the extraordinary within the fleeting.</p>
          </v-col>


        </v-row>

      </v-card>
    </v-row>

    <v-row :class="$vuetify.display.mobile ? 'ma-2 mt-16 mb-8' : 'mx-16 mt-4 mb-16'">
     
     <v-card theme="dark" 
             width="100%"
             class="mt-4"
             :min-height="drawer ? 370 : 450"
             color="#000"
             style="border: 1px solid white"
     >

       <v-row :align="'center'">

         <v-col cols="12" md="7" :align="'left'" class="pa-8 order-last order-md-first">

           <p style="font-size:1.5rem;font-weight:bold">Digital Realms: Unveiling the Secrets of Infinity</p>
           <p class="pt-4" :style="drawer ? 'font-size:1.2rem;' : 'font-size:1.2rem;'">In the depths of the digital cosmos, where pixels dance in a symphony of light and darkness, there exists a realm known only to the select few who dare to venture beyond the ordinary. It is a realm where the unseen dimensions intertwine with the tangible, invoking a sense of mystery that beckons the curious and the bold.<br><br>
              In this realm, artworks are not mere static images but living, breathing entities that actively engage with those who dare to behold them. Through layers of evolving soundscapes and hidden details, they unfold like ancient scrolls, revealing secrets that defy the boundaries of perception.<br><br>
              And as the world of NFTs evolves, my artworks stand at the forefront of bigger trends, connecting the concept of infinity to the metaverse, generative art, and the blending of physical and digital ownership. They are not just pieces of art; they are gateways to a new reality, where the infinite possibilities of the digital cosmos await those brave enough to explore them.</p>
         </v-col>

         <v-col cols="12" md="5" :align="'center'">
           
           <v-img 
             src="/img/home/hs_story_02.webp"
           ></v-img>

         </v-col>

       </v-row>

     </v-card>
   </v-row>

  </div>

  <div id="collections" class="pb-16" style="background: rgb(69,69,69);background: linear-gradient(180deg, rgba(69,69,69,1) 0%, rgba(0,0,0,1) 100%);">

    <v-row :class="$vuetify.display.mobile ? 'ma-2' : 'ma-4'">
      <v-col :align="'center'">
        <p style="font-size:3rem;font-weight:bold;color:#FFF">NFT Collections</p>
        <p style="font-size:1.5rem;color:#FFF;margin-left:10%;margin-right: 10%;">Welcome to a world where art transcends boundaries and imagination knows no limits. Our collections represent a journey into the ethereal realms of creativity, 
          where each piece tells a story and evokes emotions beyond the tangible. Explore a diverse range of artworks curated to inspire, provoke thought, and stir the soul.
        </p>
      </v-col>
    </v-row>


    <!-- Infiniity Collection -->
    <v-btn-toggle v-if="!$vuetify.display.mobile"
      v-model="collectionToggle"
      color="indigo-darken-4"
      rounded="0"
      group
    >
      <v-btn value="Infinity" size="large">
        Infinity
      </v-btn>

      <v-btn value="Harmonic Gateways" size="large">
        Harmonic Gateways
      </v-btn>

      <v-btn value="Infinity's Echo" size="large">
        Infinity's Echo
      </v-btn>

    </v-btn-toggle>

    <v-btn-toggle v-if="$vuetify.display.mobile"
      v-model="collectionToggle"
      style="height:140px;flex-direction: column;"
      color="indigo-darken-4"
      group
    >
      <v-btn value="Infinity" size="x-large" style="border-radius: 10px;height:35px">
        Infinity
      </v-btn>

      <v-btn value="Harmonic Gateways" size="x-large" class="mt-2" style="border-radius: 10px;height:35px">
        Harmonic Gateways
      </v-btn>

      <v-btn value="Infinity's Echo" size="x-large" class="mt-2" style="border-radius: 10px;height:35px">
        Infinity's Echo
      </v-btn>

    </v-btn-toggle>

    <p class="text-h4 text-white text-center ma-2">{{ collectionToggle }}</p>
    
    <v-row :justify="'center'">
      <v-col cols="12" md="6" :align="'center'">
        <v-carousel show-arrows="hover"
                    :height="$vuetify.display.mobile ? 300 : 500"
                    hide-delimiters
        >
          <v-carousel-item v-for="(item, index) in carouselItems">
            <v-card :height="$vuetify.display.mobile ? 300 : 500" 
                    :width="$vuetify.display.mobile ? 300 : collectionToggle === 'Infinity\'s Echo' ? 750 : 500" 
                    :class="collectionToggle === 'Infinity' ? 'pa-6 box' : collectionToggle === 'Harmonic Gateways' ? 'pa-6 box_2' : 'pa-6 box_3'">
              <v-img :src="item.src">
              </v-img>
              <p class="text-white">{{  item.name }}</p>
            </v-card>
          </v-carousel-item>
        </v-carousel>
      </v-col>
    </v-row>

    <v-row :justify="'center'" v-if="collectionToggle === 'Infinity'">
      <v-col cols="12" md="12" :align="'center'">
        <p style="font-size:3rem;font-weight:bold;color:#FFF">What is behind the Infinity tale?</p>
        <p :style="$vuetify.display.mobile ? 'font-size:1.5rem;color:#FFF;margin-left:5%;margin-right: 5%;' : 'font-size:1.5rem;color:#FFF;margin-left:10%;margin-right: 10%;'">
          Behind the tale of the Infinity NFT Collection lies a rich tapestry of creativity, innovation, and exploration. At its core, the Infinity NFT Collection is a manifestation of the human desire to transcend boundaries and venture into the unknown. It represents a journey into the infinite expanse of imagination, where every artwork is a portal to new worlds waiting to be discovered.<br><br>
          The tale of the Infinity NFT Collection is rooted in the belief that art has the power to inspire, provoke thought, and evoke emotion. It is a testament to the boundless potential of digital art and the transformative impact of technology on the creative process.<br><br>
          Behind the scenes, the Infinity NFT Collection is a labor of love, crafted by a team of visionary artists, technologists, and storytellers who are passionate about pushing the boundaries of what is possible. Each artwork in the collection is carefully curated to captivate the imagination and transport viewers to new realms of possibility.<br><br>
          But beyond the art itself, the Infinity NFT Collection is also a story of community and connection. It is a platform for artists and collectors to come together, to share their passion for creativity, and to celebrate the diversity of human expression.<br><br>
          Ultimately, the tale of the Infinity NFT Collection is one of infinite possibility. It is a reminder that in a world where the only limit is the limits of our own imagination, the journey is just beginning, and the possibilities are endless.        
        </p>
      </v-col>
    </v-row>

  </div>


  <div id="launch" class="pb-16" style="background: rgb(69,69,69);background: linear-gradient(180deg, rgba(69,69,69,1) 0%, rgba(0,0,0,1) 100%);">
    
    <v-row :class="$vuetify.display.mobile ? 'ma-2' : 'ma-4'">
      <v-col :align="'center'">
        <p style="font-size:3rem;font-weight:bold;color:#FFF">NFT Launch Information</p>
        <p :style="$vuetify.display.mobile ? 'font-size:1.5rem;color:#FFF;margin-left:5%;margin-right: 5%;' : 'font-size:1.5rem;color:#FFF;margin-left:10%;margin-right: 10%;'"
        >This information provides a brief overview of the NFT launch, 
        including details on the collection, blockchain, launch date, 
        total NFTs, ordinal numbers, launch platform, description, 
        features, and instructions on how to participate.</p>
      </v-col>
    </v-row>

    <v-row :class="$vuetify.display.mobile ? 'ma-4' : 'ma-4'">
      
      <v-col cols="12" md="4" :align="'center'">

        <v-card theme="dark" variant="outlined" color="white">
          <template v-slot:title>
            <v-img src="/img/icons/ethereum.png" style="max-width:42px;margin-right:10px"></v-img>
            <div class="text-h5">OpenSea Launch</div>
          </template>

          <v-card-item>
            <div>
              <div class="text-h6 text-left">NFT Collection Name: Infinity</div>
              <div class="text-h6 text-left">Blockchain: Ethereum (ETH)</div>
              <div class="text-h6 text-left">Total NFTs: 158</div>
              <div class="text-h6 text-left">Launch Platform: OpenSea</div>
              <div class="text-h6 text-center mt-4">Launch Date: 8 April, 2024</div>
            </div>
          </v-card-item>

          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="#454545" variant="flat" size="large" style="text-transform: none !important;" block class="mb-2" href="https://opensea.io/collection/infinity-by-hs/overview" target="_blank">
              <v-img src="/img/icons/opensea.png" style="max-width:32px;margin-right:10px" ></v-img>
              To OpenSea
            </v-btn>
            <v-spacer></v-spacer>
          </v-card-actions>

        </v-card>
      
      </v-col>

      <v-col cols="12" md="4" :align="'center'">

        <v-card theme="dark" variant="outlined" color="white">
          <template v-slot:title>
            <v-img src="/img/icons/ethereum.png" style="max-width:42px;margin-right:10px"></v-img>
            <div class="text-h5">OpenSea Launch</div>
          </template>

          <v-card-item>
            <div>
              <div class="text-h6 text-left">NFT Collection Name: Harmonic Gateways</div>
              <div class="text-h6 text-left">lockchain: Ethereum (ETH)</div>
              <div class="text-h6 text-left">Total NFTs: 300</div>
              <div class="text-h6 text-left">Launch Platform: OpenSea</div>
              <div class="text-h6 text-center mt-4">Launch Date: 30 April, 2024</div>
            </div>
          </v-card-item>

          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="#454545" variant="flat" size="large" style="text-transform: none !important;" block class="mb-2" disabled>
              <v-img src="/img/icons/opensea.png" style="max-width:32px;margin-right:10px"></v-img>
              Coming Soon
            </v-btn>
            <v-spacer></v-spacer>
          </v-card-actions>

        </v-card>

      </v-col>

      <v-col cols="12" md="4" :align="'center'">

        <v-card theme="dark" variant="outlined" color="white">
          <template v-slot:title>
            <v-img src="/img/icons/ordinals_nfts.png" style="max-width:42px;margin-right:10px"></v-img>
            <div class="text-h5">Ordinals Launch</div>
          </template>

          <v-card-item>
            <div>
              <div class="text-h6 text-left">NFT Collection Name: Infinity</div>
              <div class="text-h6 text-left">Blockchain: Bitcoin Ordinals (BTC)</div>
              <div class="text-h6 text-left">Total NFTs: 50</div>
              <div class="text-h6 text-left">Launch Platform: Unisat</div>
              <div class="text-h6 text-center mt-4">Launch Date: 15 May, 2024</div>
            </div>
          </v-card-item>

          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="#454545" variant="flat" size="large" style="text-transform: none !important;" block class="mb-2" disabled>
              <v-img src="/img/icons/unisat.png" style="max-width:32px;margin-right:10px"></v-img>
              Coming Soon
            </v-btn>
            <v-spacer></v-spacer>
          </v-card-actions>

        </v-card>

      </v-col>

    
    </v-row>


  
  </div>

</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
// import { scroller } from 'vue-scrollto/src/scrollTo'
import axios from 'axios'
import dateformat from "dateformat"

export default {
  name: 'Home',
  props: {
    drawer: Boolean
  },
  data: () => ({
      loadingData: true,
      tokenDetails: [],
      symbol: 'ZAPM',
      deployBlocktime: 0,
      totalMinted: 0,
      collectionToggle: 'Infinity',
      carouselItems: [],
      infinity: [
        {name: 'Infinity #08', src: '/img/collections/infinity/infinity_08.webp'},
        {name: 'Infinity #14', src: '/img/collections/infinity/infinity_14.webp'},
        {name: 'Infinity #16', src: '/img/collections/infinity/infinity_16.webp'},
      ],
      harmonicGateways: [
        {name: 'Harmonic Gateways #05', src: '/img/collections/harmonic_gateways/harmonic_gateways_05.webp'},
        {name: 'Harmonic Gateways #12', src: '/img/collections/harmonic_gateways/harmonic_gateways_12.webp'},
        {name: 'Harmonic Gateways #22', src: '/img/collections/harmonic_gateways/harmonic_gateways_22.webp'},
        {name: 'Harmonic Gateways #30', src: '/img/collections/harmonic_gateways/harmonic_gateways_30.webp'},
      ],
      whispersOfTime: [
        {name: 'Infinity\'s Echo #01', src: '/img/collections/whispers_of_time/whispers_of_time_01.webp'},
        {name: 'Infinity\'s Echo #02', src: '/img/collections/whispers_of_time/whispers_of_time_02.webp'},
        {name: 'Infinity\'s Echo #03', src: '/img/collections/whispers_of_time/whispers_of_time_03.webp'},
      ]
  }),
  components: {
    // HelloWorld
  },
  created () {
    // this.scrollToTop()
    // this.getUnisatTokenData()
    this.carouselItems = this.infinity
    this.randomHome = Math.floor(Math.random() * 3);
  },
  watch: {
    collectionToggle () {
      if (this.collectionToggle === 'Infinity') {
        this.carouselItems = this.infinity
      } else if (this.collectionToggle === 'Harmonic Gateways') {
        this.carouselItems = this.harmonicGateways
      } else if (this.collectionToggle === 'Infinity\'s Echo') {
        this.carouselItems = this.whispersOfTime
      }
    }
  },
  methods: { 
    goToLink (link) {
      window.open(link, "_blank");
    },
    getAuthHeaders() {
      return { 'Content-Type': 'application/json', 'Authorization': 'Bearer d999b66ccfdd7318c0c24dc3bb1b7ae095c3813cb2682d7158f73c48f8f4f696' };
    },
    async getUnisatTokenData() {

      this.loadingData = true
      /* if(this.unisatTokenData.length > 0) {
        this.loadingData = false
        return
      } */

      // const apiServer = this.getApiServer();
      const headers = this.getAuthHeaders();

      try {
        const response = await axios.get('https://open-api.unisat.io/v1/indexer/brc20/' + this.symbol + '/info', {headers});
        console.log(response.data)
        this.tokenDetails = response.data?.data ?? [];
        this.deployBlocktime = response.data?.data.deployBlocktime*1000

        this.totalMinted = parseFloat(this.tokenDetails.minted/this.tokenDetails.max)*100
        console.log(this.totalMinted)
        console.log(this.totalMinted < 1)
        this.totalMinted  = this.totalMinted < 1 ? this.totalMinted : Math.ceil(this.totalMinted)
        console.log(this.totalMinted)
        this.loadingData = false

      } catch (error) {
        console.log("error getUnisatTokenData", error)
        this.loadingData = false
      }
    },
    numberWithCommas (x) {
        console.log()
        x = parseInt(x)
        x = x.toString()
        var pattern = /(-?\d+)(\d{3})/;
        while (pattern.test(x))
            x = x.replace(pattern, "$1,$2");
        return x;
    },
    makeDateTime (date) {
      return dateformat(new Date(date), 'UTC:dd mmm, yyyy HH:MM:ss')
    },
    makeTime (date) {
      return dateformat(new Date(date), 'UTC:HH:MM')
    },
  }
}
</script>

<style>
.box {
  border-radius: 10px !important; /*1*/
  border: 10px solid transparent; /*2*/
  background: linear-gradient(45deg,#454545,#87bbff) border-box !important; /*3*/
  -webkit-mask-composite: xor; /*5'*/
          mask-composite: exclude; /*5*/
}

.box_2 {
  border-radius: 10px !important; /*1*/
  border: 10px solid transparent; /*2*/
  background: linear-gradient(45deg,#454545,#51200b) border-box !important; /*3*/
  -webkit-mask-composite: xor; /*5'*/
          mask-composite: exclude; /*5*/
}

.box_3 {
  border-radius: 10px !important; /*1*/
  border: 10px solid transparent; /*2*/
  background: linear-gradient(45deg,#454545,#360b51) border-box !important; /*3*/
  -webkit-mask-composite: xor; /*5'*/
          mask-composite: exclude; /*5*/
}
</style>
