json.array!(@projects) do |project|
  json.extract! project, :id, :name, :subtitle, :description, :release_date, :website
  json.url project_url(project, format: :json)
end
