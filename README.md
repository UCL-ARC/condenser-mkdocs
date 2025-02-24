# condenser-mkdocs

Documentation for the Condenser platform at UCL.

> [!IMPORTANT]
> The information in this repository may be incomplete or under review. It should
> not be considered authoritative until it is published.

## Contributing

We welcome contributions, especially additions to the list of [example deployments](/docs/developer_guide/examples.md)
and corrections. Please fork the repository, make your changes, and create a pull
request to contribute. To format the documentation pages, please refer to the
[Material for Mkdocs documentation](https://squidfunk.github.io/mkdocs-material/reference/).

Please do not make requests for support through this repository.

### Building the site locally

To preview the site locally:

``` sh
git clone --depth 1 https://github.com/UCL-ARC/condenser-mkdocs.git
cd condenser-mkdocs
python -m venv mkdocs-material
source mkdocs-material/bin/activate
python -m pip install -r requirements.txt
mkdocs serve
```

You may need to source the `activate` script again to ensure that the correct mkdocs
executable is first on your `$PATH`.

The site will be served at: <http://127.0.0.1:8000/>

### Versioning

Incrementing the version number is managed automatically through Github Actions.
When making a merge commit, include one of `#major` `#minor` or `#patch` in the commit
message to trigger them. The workflows default to minor increments.

The rough convention for versioning is:

- **patch**: Typos were corrected, or wording was changed to clarify or correct.
- **minor**: A new page was added, or a new feature was added to the documentation
site.
- **major**: New information was added that reflects a significant change in Condenser.
Significant changes to the Terms and Conditions for the platform should also trigger
a major increment.
