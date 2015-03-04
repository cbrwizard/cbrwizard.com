##
# Helper for assets display
module AssetsHelper
  ##
  # Sets a correct path to an asset from gulp
  #
  # @param path [String] relative path to an asset
  def gulp_asset_path(path)
    path = REV_MANIFEST[path] if defined?(REV_MANIFEST)
    "/assets/#{path}"
  end
end
