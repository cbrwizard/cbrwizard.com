class Admin::OwnersController < Admin::BaseController
  before_action :set_owner, only: [:show, :edit, :update]

  # GET /owners/:id
  def show
  end

  # GET /owners/1/edit
  def edit
  end

  # PATCH/PUT /owners/1
  def update
    respond_to do |format|
      if @owner.update(owner_params)
        format.html { redirect_to admin_owner_path(@owner), notice: 'Owner was successfully updated.' }
        format.json { render :show, status: :ok, location: @owner }
      else
        format.html { render :edit }
        format.json { render json: @owner.errors, status: :unprocessable_entity }
      end
    end
  end

  private
    def set_owner
      @owner = Owner.instance
    end

    def owner_params
      params.require(:owner).permit(:working_on, :researching, :current_goal)
    end
end
