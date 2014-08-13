class ProjectsController < ApplicationController

  # GET /projects
  def index
    @projects = Project.all
  end

  # GET /projects/:id
  def show
    @project = Project.find(params[:id])
  end
end
