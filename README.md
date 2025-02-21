# condenser-mkdocs

Documentation for the Condenser platform at UCL.

> [!IMPORTANT]
> The information in this repository may be incomplete or under review. It should
> not be considered authoritative until it is published.

## Contributing

We welcome contributions, especially additions to the list of [example deployments](/docs/developer_guide/examples.md)
and corrections. Please fork the repository, make your changes, and create a pull
request to contribute.

Please do not make requests for support through this repository.

To format the documentation pages, please refer to the [Material for Mkdocs documentation](https://squidfunk.github.io/mkdocs-material/reference/).

To build the site locally:

``` sh
git clone --depth 1 https://github.com/UCL-ARC/condenser-mkdocs.git
cd condenser-mkdocs
python -m venv mkdocs-material
source mkdocs-material/bin/activate
python -m pip install -r requirements.txt
source mkdocs-material/bin/activate # You may need to run this again to ensure that the correct mkdocs executable is first on your $PATH
mkdocs serve
```

The site will be served at: http://127.0.0.1:8000/
