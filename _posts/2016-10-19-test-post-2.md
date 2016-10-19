---
title: Test Post 2
date: '2016-10-19 09:06:00'
layout: post
---
Check this out:

{% highlight csharp %}
using UnityEngine;
using System.Collections;

public class BulletMove : MonoBehaviour {

	public float bulletSpeed;
	public Vector3 playerSkew;

	// Use this for initialization
	void OnEnable () {
		
	}
		
	void OnBecameInvisible () {
		//Destroy (this.gameObject);
		gameObject.SetActive(false);
	}
	
	// Update is called once per frame
	void Update () {
		// Face toward direction of movement
		transform.right = GetComponent<Rigidbody2D> ().velocity;
	}
}
{% endhighlight %}