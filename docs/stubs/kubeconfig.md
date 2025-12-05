---
title: Obtaining a kubeconfig file
---

# Obtaining a kubeconfig file

A kubeconfig file is required to remotely deploy infrastructure on the Harvester
clusters within Condenser. You may need to provide it to `kubectl` or to the Harvester
Terraform provider.

The kubeconfig file contains a secret token that uses your credentials to authenticate
to the Harvester cluster. Do not share it with anyone.

1. Log in to the [Rancher GUI](https://rancher.condenser.arc.ucl.ac.uk/)
2. In the left menu, click **Virtualization Management**
3. Select a cluster in **Harvester Clusters** section that you want to access
4. In the bottom left corner, click on **Support**
5. Click on **Download KubeConfig**. Your browser will download a file named
`<cluster name>.yaml`
6. Open the downloaded file in a text editor
7. Remove the `certificate-authority-data` key and value

This is your kubeconfig file.

The [Harvester Terraform provider](https://registry.terraform.io/providers/harvester/harvester/latest/docs#schema)
accepts the path to the kubeconfig file from the `KUBECONFIG` environment variable
or as configuration to the provider block.

``` hcl
provider "harvester" {
    kubeconfig = "/path/to/kubeconfig.yaml"
}
```

See the [Kubernetes documentation](https://kubernetes.io/docs/concepts/configuration/organize-cluster-access-kubeconfig/)
for instructions to use a kubeconfig file with `kubectl`.
