class Api::V1::AnimalsController < ApplicationController
	# GET /animals
	def index
		animals = Animal.all

		render json: animals
	end

	# GET /animals/:id
	def show
		animal = Animal.find(params[:id])

		render json: animal
	end

	# POST /animals
	def create
		species = Species.find_or_create_by(name: animal_params[:species].capitalize)
    animal = Animal.new(name: animal_params[:name], gender: animal_params[:gender], species: species)

    if animal.save
      render json: animal
    else
      render json: { error: "Something went wrong, try again" }
    end
	end

	# DELETE /animals/:id
	def destroy
		animal = Animal.find(params[:id])
		animal.destroy
		render json: { message: "Sucessfully deleted animal." }
	end

	# PATCH /animals/:id
	def update
		animal = Animal.find(params[:id])

		if animal.update(animal_params)
      render json: animal
    else
      render json: { error: "Something went wrong, try again" }
		end
	end

	# JS will take care of NEW and EDIT

	private
	def animal_params
		params.require(:animal).permit(:name, :gender, :species)
	end
end
