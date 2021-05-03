<template>
	<div class="background">
		<div class="row m-0 p-md-5 p-0 justify-content-between mb-5 ">
			<div class="col-12 col-md-6 align-items-center d-inline-flex ">
				<div class="py-4">
					<h1 class="title font-weight-bold ">{{content.filter(i=>i.name == 'technologeis_cover' ).reverse()[0].title}}</h1>
					<h3 class="description mt-2">
						{{content.filter(i=>i.name == 'technologeis_cover' ).reverse()[0].description}}
						
					</h3>
				</div>
			</div>
			<div class="col-4 d-none d-md-block ">
				<img
					class="col-12"
					:src="'http://localhost:8000/images/' + content.filter(i=>i.name == 'technologeis_cover' ).reverse()[0].image"
					alt="Technology"
				/>
			</div>
		</div>

		<div class="row mt-4 mx-0 justify-content-around d-inline-flex ">
			
		
		
			<Card v-for="card in content.filter(i=>i.name == 'technologeis_cards' ) " :key="card.id" :img="'http://localhost:8000/images/' + card.image" :description="card.description" :title="card.title" />
			
		</div>
	</div>
</template>

<script>
import Card from "../../components/Cards.vue";
import {store} from '../../store/store'

export default {
	name: "Tchnologies",
	data() {
		return {
			content:store.state.contents
		};
	},
	components: { Card },

};
</script>

<style scoped>
.background {
	background: url("../../assets/background.svg") no-repeat;
	background-size: cover;
}
.head {
	display: flex;
	justify-content: center;
	align-items: center;
	height: 80vh;
	gap: 40px;
	flex-wrap: wrap;
	height: 85vh;
}
.paraghraph {
	width: 50vw;
}
.images {
	width: 30vw;
	height: 70%;
}

.title {
	font-weight: 800;

	color: rgb(255, 118, 0);
}
.description {
	font-weight: 300;
	color: rgb(255, 255, 255);
}
</style>
