---
title: Deploying with kubectl
---

# Deploying with kubectl

Resources on Condenser are typically deployed through Harvester onto an
underlying kubernetes cluster. However, the cluster can be accessed directly using
the kubectl tool. This can be used to access features that are not yet enabled by
Harvester.

On your local computer, install [kubectl](https://kubernetes.io/docs/reference/kubectl/)
and obtain a [kubeconfig file](../../stubs/kubeconfig.md) for a cluster on Condenser.

Export the location of the kubeconfig file and try the following command to see the
namespaces that you have permission to read:

``` sh
export KUBECONFIG=/path/to/kubeconfig.yaml
kubectl get ns
```

The output should be a similar table:

``` text
NAME                                     STATUS   AGE
arc-bespoke-ns                           Active   93d
arc-general-ns                           Active   204d
```

You can also use `kubectl apply` to deploy resources.

Kubernetes deployments are described by yaml files. A useful method is to create
a simple resource through the Harvester GUI, then export the yaml to use as
a starting point.

For example, the yaml to describe the deployment created by the [Deploying with Rancher](./deploying_rancher.md)
can be obtained as follows:
