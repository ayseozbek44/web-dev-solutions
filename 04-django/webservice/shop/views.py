from json import loads
from django.http.response import HttpResponseNotAllowed
from django.shortcuts import render
from django.http import JsonResponse
from shop.models import Article




def view_article(request, id):
    if request.method == 'GET':
        article=Article.objects.filter(id=id).get()
        return JsonResponse({
            'id': article.id,
            'name': article.name
        })
    elif request.method =='POST':

        data=loads(request.body)
        
        article=Article.objects.create(name=data['name'])
        article.save()

        return JsonResponse({

            'id': article.id,
            'name': article.name
        })
            

    return HttpResponseNotAllowed 